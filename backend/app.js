const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = 3001;

app.use(
    session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 1000 * 60 * 30 }, // 30분
    })
);

app.use(cors());
app.use(express.json());

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mariadb',
    database: 'music',
});

// 회원가입 API
app.post('/signup', async (req, res) => {
    const { username, password, name, phone } = req.body;

    // 입력값 검증
    if (
        !username || !password || !name || !phone ||
        username.length > 50 || password.length > 50 ||
        name.length > 50 || phone.length > 15
    ) {
        return res.status(400).send("입력값이 유효하지 않습니다.");
    }

    let connection;
    try {
        connection = await pool.getConnection();
        // DB에 사용자 정보 저장
        await connection.query(
            'INSERT INTO users (username, password, name, phone) VALUES (?, ?, ?, ?)',
            [username, password, name, phone]
        );
        res.status(201).send("회원가입 성공");
    } catch (err) {
        console.error(err);
        res.status(500).send("회원가입 실패");
    } finally {
        if (connection) connection.release();
    }
});

// 로그인 API
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    let connection;
    try {
        connection = await pool.getConnection();
        const rows = await connection.query('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length > 0) {
            if (rows[0].password === password) {
                req.session.user = { id: rows[0].id, username: rows[0].username }; // 세션 저장
                res.status(200).json({ message: "로그인 성공", username: rows[0].username });
            } else {
                res.status(401).send("비밀번호가 일치하지 않습니다.");
            }
        } else {
            res.status(404).send("사용자를 찾을 수 없습니다.");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("로그인 실패");
    } finally {
        if (connection) connection.release();
    }
});

// 세션 상태 확인 API
app.get('/session', (req, res) => {
    if (req.session.user) {
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).send("세션이 존재하지 않습니다.");
    }
});

// 로그아웃 API
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).send("로그아웃 실패");
        } else {
            res.status(200).send("로그아웃 성공");
        }
    });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
