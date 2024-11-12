import React from 'react';
//import './TextSection.css'; // 스타일링을 위한 CSS 파일 연결

function TextSection() {
    return (
        <section className="footer-text-section">
            <h3>MUSIC FACTORY</h3>
            <p>
                공동대표 이서린, 최민기 사업자등록번호 1234-123 통신판매업신고번호 제2006-경기성남-0692호
                <br />
                주소 경기도 성남시 중원구 광명로 377 대표전화 1234-1234 이메일 abcdefg@shingu.ac.kr
                <br />
                호스팅 서비스 제공 shingu Cloud 개인정보처리방침 이용약관 운영정책 고객센터 결제/철회 안내
                상담/사업자정보 확인© shingu Corp.
                <br />
                &nbsp;
            </p>
        </section>
    );
}

export default TextSection;
