import React from 'react';
import '../scss/Footer.scss';

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
                    <li>페이스북</li>
                    <li>인스타그램</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;