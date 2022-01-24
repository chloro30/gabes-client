import React, { useState } from 'react';
import { SiCoffeescript } from 'react-icons/si';
import { Link } from 'react-router-dom';
import '../scss/Header.scss';

function Header() {
    const [ open, setOpen ] = useState(false);
    const toggleGnb = () => setOpen(!open);

    const [lnbOn, setLnbOn] = useState(false);
    const toggleLnb = () => setLnbOn(!lnbOn);
    const onLnb = () => setLnbOn(true);

    return (
        <header className={` ${lnbOn ? 'lnb-on': '' } `} onMouseEnter={toggleLnb}  onMouseLeave={toggleLnb} >
            <div className={`header-con inner-con ${lnbOn ? 'lnb-on': '' } `} onMouseEnter={onLnb} onMouseLeave={toggleLnb}>
                <Link to="/"><h1>Gabes Coffee <SiCoffeescript /></h1></Link>
                <div className={`gnb ${ open ? 'on' : '' } `} onMouseEnter={onLnb,toggleGnb} onMouseLeave={toggleGnb}>
                    <ul onMouseEnter={onLnb}>
                        <li>Gabes</li>
                        <li>Menu</li>
                        <li>Store</li>
                        <li>What's New</li>
                    </ul>
                    <div className={`lnb ${ open ? 'on' : '' } `} onMouseEnter={onLnb} >
                        <div className='lnb-innerDiv'>
                            <ul className={`brand ${ open ? 'on' : '' } `} >
                                <li>연혁</li>
                                <li>회사소개</li>
                            </ul>
                            <ul className={`menu ${ open ? 'on' : '' } `}>
                                {/* <li>New</li> */}
                                <li><Link to="/coffee">Coffee</Link></li>
                                <li>Desert</li>
                            </ul>
                            <ul className={`store ${ open ? 'on' : '' } `}>
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
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/register">회원가입</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;