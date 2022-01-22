import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Header.scss';

function Header() {
    const [ open, setOpen ] = useState(false);
    const toggleGnb = () => setOpen(!open);

    return (
        <header>
            <div className='header-con inner-con'>
                <Link to="/"><h1>Gabes Coffee</h1></Link>
                <div className={`gnb  ${ open ? 'on' : '' } `} onMouseEnter={toggleGnb} onMouseLeave={toggleGnb}>
                    <ul>
                        <li>Gabes</li>
                        <li>Menu</li>
                        <li>Store</li>
                        <li>What's New</li>
                    </ul>
                    <div className={`lnb  ${ open ? 'on' : '' } `} >
                        <div className='lnb-innerDiv'>
                            <ul className={`brand  ${ open ? 'on' : '' } `}>
                                <li>연혁</li>
                                <li>회사소개</li>
                            </ul>
                            <ul className={`menu  ${ open ? 'on' : '' } `}>
                                <li>New</li>
                                <li>Coffee</li>
                                <li>Desert</li>
                            </ul>
                            <ul className={`store  ${ open ? 'on' : '' } `}>
                                <li>
                                    매장찾기
                                </li>
                            </ul>
                            <ul className={`board  ${ open ? 'on' : '' } `}>
                                <li>공지사항</li>
                                <li>이벤트/뉴스</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="login">
                    <ul>
                        <Link to="/login"><li>로그인</li></Link>
                        <Link to="/register"><li>회원가입</li></Link>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;