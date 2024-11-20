import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../FormStyles.css'; // 공통 스타일

function Logup({ user }) {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const navigate = useNavigate();

    useEffect(() => {
        // user가 로드될 때 초기화
        if (user) {
            setName(user.name || '');
            setPhone(user.phone || '');
            setLoading(false); // 로딩 완료
        }
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/update-profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: user.username,
                password,
                name,
                phone,
            }),
        });

        if (response.ok) {
            alert('회원정보가 성공적으로 수정되었습니다.');
            navigate('/home');
        } else {
            alert('회원정보 수정에 실패했습니다. 다시 시도해주세요.');
        }
    };

    const handleClose = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/home');
        }
    };

    // 로딩 상태 처리
    if (loading) {
        return <p>로딩 중...</p>;
    }

    return (
        <div className="page-container">
            <button className="form-close-button" onClick={handleClose}>X</button>
            <div className="header-container">
                <h1 className="form-title">SOUND FACTORY</h1>
                <p className="form-description">회원정보를 수정하세요.</p>
            </div>
            <div className="form-container">
                <form onSubmit={handleUpdate} className="form-inputs">
                    <input
                        type="text"
                        placeholder="아이디"
                        className="input-field"
                        value={user.username}
                        readOnly
                    />
                    <input
                        type="password"
                        placeholder="비밀번호 (변경 시 입력)"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        placeholder="전화번호"
                        className="input-field"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit" className="submit-button">수정하기</button>
                </form>
            </div>
        </div>
    );
}
export default Logup;