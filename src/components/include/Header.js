import React, { useEffect, useState } from 'react';
import { SiCoffeescript } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../module/modal/LoginModal';
import '../scss/Header.scss';

function Header( {isLogin} ) {

    
    //로그인 여부 확인
    useEffect(()=>{
        console.log(isLogin);
    },[isLogin]);

    //로그아웃 - session에서 user_id를 삭제한다.
    const onLogout = () => {
        sessionStorage.removeItem('user_id');
        document.location.href = '/';
    }


    const navigate = useNavigate();

    const [ open, setOpen ] = useState(false);
    const toggleGnb = () => setOpen(!open);
    const offGnb = () => setOpen(false);

    const [lnbOn, setLnbOn] = useState(false);
    const toggleLnb = () => setLnbOn(!lnbOn);
    const onLnb = () => setLnbOn(true);

    //햄버거 토글 버튼
    const [toggle, setToggle] = useState(false);
    const OnToggle = () => setToggle(!toggle);

    // 로그인 모달창 컨트롤
    const [loginModal, setLoginModal] = useState(false);
    const toggleLoginModal = () => setLoginModal(!loginModal);

    // 모달 닫기 버튼에 사용할 state를 props 넘겨주기
    const closeModal = () => {
        setLoginModal(!loginModal);
    }

    // 로그인 모달창 뜨면 배경 스크롤 막기
    if(loginModal) {
        document.body.classList.add('active-modal');
    }else{
        document.body.classList.remove('active-modal');
    }
    

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
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="login">
                    {(isLogin) ?
                            <ul>
                                <li onClick={()=>navigate("/mypage")}>마이페이지</li>
                                <li onClick={onLogout}>로그아웃</li>
                            </ul>
                        : 
                            <ul>
                                <li onClick={()=>toggleLoginModal()}>로그인</li>
                                <li onClick={()=>navigate("/register")}>회원가입</li>
                            </ul>
                    }
                </div>
                <div className={`toggle ${ toggle ? 'on' : '' } `} onClick={()=>OnToggle()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`toggle-menu ${ toggle ? 'on' : '' } `} onClick={()=>OnToggle()}>
                    <div className='toggle-gnb-bg'>
                        <ul className='toggle-gnb'>
                            <li><Link to="/about/intro">Gabes</Link></li>
                            <li><Link to="/menu/coffee">Menu</Link></li>
                            <li><Link to="/store">Store</Link></li>
                            <li><Link to="/board/notice">What's new</Link></li>
                        </ul>
                        <div className='toggle-submenu'>
                            <ul className='sub-gabes'>
                                <li><Link to="/about/intro">회사소개</Link></li>
                                <li><Link to="/about/history">연혁</Link></li>
                            </ul>
                            <ul className='sub-menu'>
                                <li><Link to="/menu/coffee">Coffee</Link></li>
                                <li><Link to="/menu/desert">Desert</Link></li>
                            </ul>
                            <ul className='sub-store'>
                                <li><Link to="/store">매장찾기</Link></li>
                            </ul>
                            <ul className='sub-wtsn'>
                                <li><Link to="/board/notice">공지사항</Link></li>
                                <li><Link to="/board/faq">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    { (isLogin) ?
                            <ul className='sub-login'>
                                <li onClick={()=>navigate("/mypage")}>마이페이지</li>
                                <li onClick={onLogout}>로그아웃</li>
                            </ul>
                        :
                            <ul className='sub-login'>
                                <li onClick={()=>toggleLoginModal()}>로그인</li>
                                <li onClick={()=>navigate("/register")}>회원가입</li>
                            </ul>
                    }
                </div>
            </div>
            {/* 로그인 모달 */}
            {loginModal && <LoginModal closeModal={closeModal} />}
        </header>
    );
}

export default Header;