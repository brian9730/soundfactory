/*
import React from 'react';

function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <h1>SOUND FACTORY</h1>
                <p>뮤지션을 위한 음악 플랫폼입니다!...</p>
            </header>

            <section className="latest-albums">
                <h2>최신 앨범</h2>
                <div className="album-grid">
                    <div className="album-item">앨범 1</div>
                    <div className="album-item">앨범 2</div>
                    <div className="album-item">앨범 3</div>
                </div>
            </section>

            <section className="recommended-songs">
                <h2>추천 음악</h2>
                <div className="song-grid">
                    <div className="song-item">음악 1</div>
                    <div className="song-item">음악 2</div>
                    <div className="song-item">음악 3</div>
                </div>
            </section>
        </div>
    );
}

export default Home;
 */


import React from 'react';
import '../Home.css';

function Home() {
    return (
        <div className="home">
            {/* 광고 이미지 섹션 */}
            <section className="ad-section">
                <img src="/homemain.png" alt="광고 이미지" className="ad-image" />
            </section>

            {/* 최신 앨범 섹션 */}
            <section className="album-section">
                <h2>최신 앨범</h2>
                <div className="album-list">
                    {[...Array(6)].map((_, i) => (
                        <div className="album-item" key={i}>
                            <img src="placeholder.jpg" alt="앨범 이미지" />
                            <p>앨범 제목 {i + 1}</p>
                            <p>아티스트 {i + 1}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 추천 음악 섹션 */}
            <section className="recommend-section">
                <h2>추천 음악</h2>
                <div className="album-list">
                    {[...Array(6)].map((_, i) => (
                        <div className="album-item" key={i}>
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


export default Home;
