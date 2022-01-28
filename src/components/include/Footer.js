/* eslint-disable */

import React from 'react';
import '../scss/Footer.scss';
import { GrFacebook, GrInstagram } from 'react-icons/gr';
import { SiKakaotalk } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className='footer-con inner-con'>
                <p>
                    대표자 : 이진우 | 사업자등록번호 234-56-78901<br/>
                    주소 : 서울 종로구 세종대로 172 , 30층<br/>
                    Copyright ⓒ 2022 Gabes Coffee. All Rights Reserved.
                </p>
                <ul className='footer-menu'>
                    <li><Link to="#">개인정보 처리방침</Link></li>
                    <li><Link to="#">영상정보처리기기 운영관리 방침</Link></li>
                    <li><Link to="#">사이트 이용약관</Link></li>
                    <li><Link to="#">윤리신고센터</Link></li>
                </ul>
                <ul className='footer-links'>
                    {/* <li>CCM</li> */}
                    <li><a href='https://facebook.com' target='_blank' ><GrFacebook /></a></li>
                    <li><a href='https://instagram.com' target='_blank' ><GrInstagram /></a></li>
                    <li><a href='https://kakao.com' target='_blank' ><SiKakaotalk /></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;