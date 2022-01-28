import React, { useState } from 'react';
import { SiCoffeescript } from 'react-icons/si';
import { Link } from 'react-router-dom';
import '../scss/Header.scss';

function Header() {
    const [ open, setOpen ] = useState(false);
    const toggleGnb = () => setOpen(!open);
    const offGnb = () => setOpen(false);

    const [lnbOn, setLnbOn] = useState(false);
    const toggleLnb = () => setLnbOn(!lnbOn);
    const onLnb = () => setLnbOn(true);

    return (
        <header className={` ${lnbOn ? 'lnb-on': '' } `} onMouseEnter={toggleLnb}  onMouseLeave={toggleLnb} >
            <div className={`header-con inner-con ${lnbOn ? 'lnb-on': '' } `} onMouseEnter={onLnb} onMouseLeave={offGnb}>
                <Link to="/"><h1>Gabes Coffee <SiCoffeescript /></h1></Link>
                <div className={`gnb ${ open ? 'on' : '' } `} onMouseEnter={onLnb,toggleGnb} onMouseLeave={toggleGnb}>
                    <ul onMouseEnter={onLnb}>
                        <li><Link to="/about/intro">Gabes</Link></li>
                        <li><Link to="/menu/coffee">Menu</Link></li>
                        <li><Link to="/store">Store</Link></li>
                        <li><Link to="/board/notice">What's New</Link></li>
                    </ul>
                    <div className={`lnb ${ open ? 'on' : '' } `} onMouseEnter={onLnb} >
                        <div className='lnb-innerDiv'>
                            <ul className={`brand ${ open ? 'on' : '' } `} >
                                <li><Link to="/about/intro">회사소개</Link></li>
                                <li><Link to="/about/history">연혁</Link></li>
                            </ul>
                            <ul className={`menu ${ open ? 'on' : '' } `}>
                                {/* <li>New</li> */}
                                <li><Link to="/menu/coffee">Coffee</Link></li>
                                <li><Link to="/menu/desert">Desert</Link></li>
                            </ul>
                            <ul className={`store ${ open ? 'on' : '' } `}>
                                <li><Link to="/store">매장찾기</Link></li>
                            </ul>
                            <ul className={`board  ${ open ? 'on' : '' } `}>
                                <li><Link to="/board/notice">공지사항</Link></li>
                                <li><Link to="/board/faq">FAQ</Link></li>
                                <li><Link to="/board/event">이벤트</Link></li>
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