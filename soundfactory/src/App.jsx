import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Explore from './components/Explore';
import Library from './components/Library';
import LikedMusic from './components/LikeMusic';
import Signup from './components/Signup';
import Login from './components/Login';
import TextSection from './components/TextSection';
import Footer from './components/Footer';
import AccountMenu from './components/AccountMenu';
import Service from './components/Service';
import Privacy from './components/Privacy';
import Album from './components/Album'; // Album 컴포넌트 import
import './App.css';

function AppContent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
    const [username, setUsername] = useState(''); // 로그인한 사용자 이름
    const location = useLocation(); // 현재 경로 가져오기

    // 로그인 및 회원가입 페이지에서 특정 UI 숨김
    const hideComponents = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="App">
            {!hideComponents && (
                <>
                    <header className="header">
                        <input type="text" className="search-bar" placeholder="검색" />
                        <div className="signin-buttons">
                            {isLoggedIn ? (
                                <AccountMenu
                                    username={username}
                                    setIsLoggedIn={setIsLoggedIn}
                                    setUsername={setUsername}
                                />
                            ) : (
                                <>
                                    <Link to="/signup">
                                        <button className="header-btn">가입하기</button>
                                    </Link>
                                    <Link to="/login">
                                        <button className="header-btn">로그인 하기</button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </header>
                    <Sidebar />
                </>
            )}
            <div className="main-content">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/likemusic" element={<LikedMusic />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/login"
                        element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}
                    />
                    <Route path="/service" element={<Service />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/album" element={<Album />} /> {/* Album 경로 추가 */}
                    <Route path="/" element={<Home />} />
                </Routes>
                {!hideComponents && (
                    <>
                        <TextSection />
                        <Footer />
                    </>
                )}
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
