import React from 'react';
import '../scss/Footer.scss';
import { GrFacebook, GrInstagram } from 'react-icons/gr';
import { SiKakaotalk } from 'react-icons/si';

function Footer() {
    return (
        <footer>
            <div className='footer-con inner-con'>
                <p>
                    대표자 : 이진우 | 사업자등록번호 234-56-78901<br/>
                    주소 : 서울 종로구 세종대로 172 , 30층<br/>
                    ⓒ 2022 Gabes Coffee. All Rights Reserved.
                </p>
                <ul>
                    <li>개인정보 처리방침</li>
                    <li>영상정보처리기기 운영관리 방침</li>
                    <li>사이트 이용약관</li>
                    <li>윤리신고센터</li>
                </ul>
                <ul className='links'>
                    {/* <li>CCM</li> */}
                    <li><GrFacebook onClick={()=>window.location.href="https://facebook.com"} /></li>
                    <li><GrInstagram onClick={()=>window.location.href="https://instagram.com"} /></li>
                    <li><SiKakaotalk onClick={()=>window.location.href="https://kakao.com"} /></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;