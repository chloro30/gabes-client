import React from 'react';
import './LoginModal.scss';

function LoginModal( { closeModal } ) {



    return (
        <div className='overlay'>
            <form className='login-form'>
                <button type="button" className='close' onClick={closeModal}>❌</button>
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td><input type="text" name="id" /></td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name="pwd" /></td>
                        </tr>
                    </tbody>
                </table>
                <div className='btn login-btn'>
                    <button type='submit'>로그인</button>
                </div>
                {/* <div className='line-or'><span></span></div> */}
                <div className='btn register-btn'>
                    <button type='button'>회원가입</button>
                </div>
            </form>
        </div>
    );
}

export default LoginModal;