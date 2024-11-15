// backend/app.js
const express = require('express');
const mariadb = require('mariadb');

const app = express();
const port = 3001;

// MariaDB 연결 풀 설정
const pool = mariadb.createPool({
    host: 'localhost', // MariaDB 서버 주소
    user: 'root',      // 사용자명
    password: 'password', // 비밀번호
    database: 'your_database_name'
});

app.get('/', async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const rows = await connection.query("SELECT 1 as val");
        res.send(rows);
    } catch (err) {
        res.status(500).send("DB 연결 실패");
    } finally {
        if (connection) connection.release();
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
