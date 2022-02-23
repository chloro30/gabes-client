import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.scss';
import axios from 'axios';
import { API_URL } from '../../config/constants';

function LoginModal( { closeModal } ) {

    const navigate = useNavigate();

    //form 데이터를 저장할 state
    const [formdata, setFormdata] = useState({
        userId: null,
        userPwd: null
    });

    const changeId = (e) => {
        // console.log(e.target.value);
        setFormdata({
            ...formdata,
            userId: e.target.value
        });
        console.log(formdata);
    }

    const changePwd = (e) => {
        // console.log(e.target.value);
        setFormdata({
            ...formdata,
            userPwd: e.target.value
        });
        console.log(formdata);
    }

    //회원가입 버튼 클릭
    const clickRegister = () => {
        closeModal();
        navigate("/register");
    }
    
    //로그인 버튼 클릭
    const onSubmit = (e) => {
        e.preventDefault();
        if(formdata.userId === null || formdata.userId === ""){
            alert('아이디를 입력하세요');
        }else if(formdata.userPwd === null || formdata.userPwd === ""){
            alert('비밀번호를 입력하세요');
        }else{
            //로그인 로직 처리
            alert('로그인 세션 연결은 보완중입니다. 😂');

            console.log(formdata);

            //비동기 전송으로 POST요청을 해주는 함수
            // const url = `http://localhost:8080/board/notice`;
            // const url = `${API_URL}/login`;
            // axios.post(url, formdata)
            // .then( (result) => {
            //     console.log(result)
            // })
            // .catch( (err) => console.error(err));


            //로그인 모달 닫기
            // closeModal();
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
                                <td><input type="text" name="id" onChange={changeId}/></td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td><input type="password" name="pwd" onChange={changePwd} /></td>
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