// soundfactory/src/components/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../FormStyles.css'; // 스타일링 파일

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, name, phone }),
        });

        if (response.ok) {
            alert('회원가입이 완료되었습니다!');
            navigate('/login'); // 회원가입 완료 후 로그인 페이지로 이동
        } else {
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const handleClose = () => {
        if (window.history.length > 1) {
            navigate(-1); // 이전 페이지가 있으면 뒤로가기
        } else {
            navigate('/home'); // 기본 페이지로 이동
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
                <form onSubmit={handleSignup} className="form-inputs">
                    <input
                        type="text"
                        placeholder="아이디"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        className="input-field"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="이름"
                        className="input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="전화번호(-없이 입력)"
                        className="input-field"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit" className="submit-button">회원가입</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
