import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AccountMenu.css'; // 스타일 추가

function AccountMenu({ username, setIsLoggedIn, setUsername }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // 로그인 상태를 false로 설정
        setUsername(''); // 사용자 이름 초기화
        alert("로그아웃 되었습니다."); // 로그아웃 처리 (예: 상태 초기화)
        navigate('/Home');
    };

    const handleAccountSwitch = () => {
        navigate('/login'); // 로그인 페이지로 이동
    };

    return (
        <div className="account-menu">
            <button className="account-button" onClick={toggleMenu}>
                <img src="/account.png" alt="Profile" className="profile-icon" /> {/* 프로필 아이콘 */}
            </button>
            {isMenuOpen && (
                <div className="menu-dropdown">
                    <div className="menu-header">
                        <p>{username}님</p>
                        <p>@{username.toLowerCase()}</p>
                    </div>
                    <ul>
                        <li>유료 멤버십</li>
                        <li onClick={handleAccountSwitch}>계정 전환</li>{/* 계정 전환 클릭 시 */}
                        <li onClick={handleLogout}>로그아웃</li>
                        <li>회원정보 수정</li>
                        <li>최근 감상 기록</li>
                        <li onClick={() => navigate('/service')}>서비스 약관</li>
                        <li onClick={() => navigate('/privacy')}>개인정보처리방침</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AccountMenu;

