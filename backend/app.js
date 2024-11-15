// backend/app.js
const express = require('express');
const mariadb = require('mariadb');
const bcrypt = require('bcrypt'); // 비밀번호 암호화를 위해 bcrypt 사용
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mariadb',
    database: 'music'
});

// 회원가입 API
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    let connection;

    try {
        connection = await pool.getConnection();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
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
            const match = await bcrypt.compare(password, rows[0].password);
            if (match) {
                res.status(200).send("로그인 성공");
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
        if (connection) await connection.release();
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

