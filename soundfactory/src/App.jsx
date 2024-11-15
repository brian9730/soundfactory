/*
import React, { useState } from 'react';
import Home from './components/Home';
import Explore from './components/Explore';
import Library from './components/Library';
import LikeMusic from './components/LikeMusic';
import Sidebar from './components/Sidebar';

function App() {
    const [activeComponent, setActiveComponent] = useState('home');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'home':
                return <Home />;
            case 'explore':
                return <Explore />;
            case 'library':
                return <Library />;
            case 'likeMusic':
                return <LikeMusic />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="app">
            <Sidebar setActiveComponent={setActiveComponent} />
            <div className="content">
                {renderComponent()}
            </div>
        </div>
    );
}

export default App;

 */
/*
기본

import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Explore from './components/Explore';
import Library from './components/Library';
import LikedMusic from './components/LikeMusic';
import './App.css';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Home />
        </div>
    );
}

export default App;

*/

/*
풋터랑 텍스트 앱에 미리 적용하려고 수정함
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Explore from './components/Explore';
import Library from './components/Library';
import LikedMusic from './components/LikeMusic';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="header">
                    <input type="text" className="search-bar" placeholder="검색"/>
                </header>
                <Sidebar/>
                <div className="main-content">
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/explore" element={<Explore/>}/>
                        <Route path="/library" element={<Library/>}/>
                        <Route path="/likemusic" element={<LikedMusic/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Explore from './components/Explore';
import Library from './components/Library';
import LikedMusic from './components/LikeMusic';
import Signup from './components/Signup';
import Login from './components/Login';
import TextSection from './components/TextSection'; // 새로 추가
import Footer from './components/Footer'; // 새로 추가
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="header">
                    <input type="text" className="search-bar" placeholder="검색"/>
                    <div className="signin-buttons">
                        <Link to="/Signup">
                            <button className="header-btn">가입하기</button>
                        </Link>
                        <Link to="/Login">
                            <button className="header-btn">로그인 하기</button>
                        </Link>
                    </div>
                </header>
                <Sidebar/>
                <div className="main-content">
                    <Routes>
                    <Route path="/home" element={<Home />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/likemusic" element={<LikedMusic />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <TextSection /> {/* 텍스트 섹션 추가 */}
                    <Footer /> {/* 풋터 추가 */}
                </div>
            </div>
        </Router>
    );
}

export default App;
