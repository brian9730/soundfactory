/*
import React from 'react';
import '../Explore.css';

function Explore() {
    return (
        <div className="explore">
            <h1>둘러보기</h1>

        <section className="hotmusic-section">
            <h2>인기곡</h2>
            <div className="music-list">
                {[...Array(6)].map((_, i) => (
                    <div className="music-item" key={i}>
                        <img src="placeholder.jpg" alt="앨범 이미지"/>
                        <p>앨범 제목 {i + 1}</p>
                        <p>아티스트 {i + 1}</p>
                    </div>
                ))}
            </div>
        </section>


        <section className="newmusic-section">
            <h2>최신 음악</h2>
            <div className="music-list">
                {[...Array(6)].map((_, i) => (
                    <div className="music-item" key={i}>
                        <img src="placeholder.jpg" alt="추천 앨범 이미지"/>
                        <p>추천 앨범 제목 {i + 1}</p>
                        <p>추천 아티스트 {i + 1}</p>
                    </div>
                ))}
            </div>
        </section>

    </div>
)
    ;
}

export default Explore;
*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Explore.css';

function Explore() {
    const navigate = useNavigate();

    // 버튼을 클릭하면 해당 경로로 이동하는 함수
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="explore">
            <div className="button-container">
                <button onClick={() => handleNavigation('/latest-music')}>최신 음악</button>
                <button onClick={() => handleNavigation('/chart')}>차트</button>
                <button onClick={() => handleNavigation('/genre')}>장르</button>
                <button onClick={() => handleNavigation('/situation')}>상황별</button>
                <button onClick={() => handleNavigation('/artist')}>아티스트</button>
                <button onClick={() => handleNavigation('/playlist')}>플레이리스트</button>
            </div>

            {/* 인기곡 섹션 */}
            <section className="hotmusic-section">
                <h2>인기곡</h2>
                <div className="music-list1">
                    {[...Array(12)].map((_, i) => (
                        <div className="music-item" key={i}>
                            <img src="placeholder.jpg" alt="앨범 이미지" />
                            <p>앨범 제목 {i + 1}</p>
                            <p>아티스트 {i + 1}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 최신 음악 섹션 */}
            <section className="newmusic-section">
                <h2>최신 음악</h2>
                <div className="music-list">
                    {[...Array(6)].map((_, i) => (
                        <div className="music-item" key={i}>
                            <img src="placeholder.jpg" alt="추천 앨범 이미지" />
                            <p>추천 앨범 제목 {i + 1}</p>
                            <p>추천 아티스트 {i + 1}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Explore;
