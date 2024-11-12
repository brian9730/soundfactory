import React from 'react';
//import './Footer.css'; // 스타일링을 위한 CSS 파일 연결

function Footer() {
    return (
        <footer className="footer">
            <p>오늘 뭐 듣지?</p>
            <div className="controls">
                <button>⏮️</button>
                <button>▶️</button>
                <button>⏭️</button>
            </div>
        </footer>
    );
}

export default Footer;
