/*
import React from 'react';

function Sidebar({ setActiveComponent }) {
    return (
        <div className="sidebar">
            <button onClick={() => setActiveComponent('home')}>홈</button>
            <button onClick={() => setActiveComponent('explore')}>둘러보기</button>
            <button onClick={() => setActiveComponent('library')}>보관함</button>
            <button onClick={() => setActiveComponent('likedMusic')}>좋아하는 음악</button>
        </div>
    );
}

export default Sidebar;
*/
/*
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/home">홈</Link>
            <Link to="/explore">둘러보기</Link>
            <Link to="/library">보관함</Link>
            <Link to="/likemusic">좋아하는 음악</Link>
            <div>설정</div>
            <div>고객센터</div>
            <button>플레이리스트 만들기</button>
        </div>
    );
}

export default Sidebar;
*/
/*
import React from 'react';
import { NavLink } from 'react-router-dom'; // Link 대신 NavLink 사용

function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink to="/home" className="nav-link" activeClassName="active-link">홈</NavLink>
            <NavLink to="/explore" className="nav-link" activeClassName="active-link">둘러보기</NavLink>
            <NavLink to="/library" className="nav-link" activeClassName="active-link">보관함</NavLink>
            <NavLink to="/likemusic" className="nav-link" activeClassName="active-link">좋아하는 음악</NavLink>
            <div>설정</div>
            <div>고객센터</div>
            <button>플레이리스트 만들기</button>
        </div>
    );
}

export default Sidebar;
*/

import React from 'react';
import { NavLink } from 'react-router-dom'; // NavLink 사용

function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>홈</NavLink>
            <NavLink to="/explore" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>둘러보기</NavLink>
            <NavLink to="/library" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>보관함</NavLink>
            <NavLink to="/likemusic" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>좋아하는 음악</NavLink>
            <div>설정</div>
            <div>고객센터</div>
            <button>플레이리스트 만들기</button>
        </div>
    );
}

export default Sidebar;
