import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.scss';

function LoginModal( { closeModal } ) {

    const navigate = useNavigate();

    const inputId = useRef();
    const inputPwd = useRef();

    //회원가입 버튼 클릭
    const clickRegister = () => {
        closeModal();
        navigate("/register");
    }
    
    //로그인 버튼 클릭
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputId.current.value === ""){
            alert('아이디를 입력하세요');
        }else if(inputPwd.current.value === ""){
            alert('비밀번호를 입력하세요');
        }else{
            alert('로그인 세션 연결은 보완중입니다. 😂');
            closeModal();
        }
    }

    return (
        <div className='overlay'>
            <div className='login-wrap'>
                <form className='login-form' onSubmit={onSubmit}>
                    <button type="button" className='close' onClick={closeModal}>❌</button>
                    <table>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td><input ref={inputId} type="text" name="id" /></td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td><input ref={inputPwd} type="password" name="pwd" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='login-btn'>
                        <button type='submit'>로그인</button>
                    </div>
                    {/* <div className='line-or'><span></span></div> */}
                    <div className='register-btn'>
                        <button type='button' onClick={clickRegister}>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;