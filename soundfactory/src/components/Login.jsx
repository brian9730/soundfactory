// soundfactory/src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../FormStyles.css'; // 공통 CSS 파일 가져오기

function Login({ setIsLoggedIn, setUsername }) {
    const [localUsername, setLocalUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: localUsername, password }),
        });

        if (response.ok) {
            const data = await response.json(); // JSON 응답 파싱
            setIsLoggedIn(true); // 로그인 상태 업데이트
            setUsername(data.username);
            alert(`로그인 성공! ${data.username}님 환영합니다`);
            navigate('/home'); // 홈 화면으로 이동
        } else {
            alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
        }
    };

    const handleClose = () => {
        if (window.history.length > 1) {
            navigate(-1); // 뒤로가기
        } else {
            navigate('/home'); // 기본 경로로 이동
        }
    };

    return (
        <div className="page-container">
            <button className="form-close-button" onClick={handleClose}>X</button>
            <div className="header-container">
                 <h1 className="form-title">SOUND FACTORY</h1>
                 <p className="form-subtitle">"당신의 음악 여정이 시작됩니다!"</p>
                 <p className="form-description">
                   지금 로그인하여 소소한 행복을 느껴보세요
                 </p>
            </div>
         <div className="form-container">
            <form onSubmit={handleLogin} className="form-inputs">
                <input
                    type="text"
                    placeholder="아이디"
                    className="input-field"
                    value={localUsername}
                    onChange={(e) => setLocalUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit-button">
                    로그인 하기
                </button>
            </form>
         </div>
        </div>
    );
}

export default Login;
