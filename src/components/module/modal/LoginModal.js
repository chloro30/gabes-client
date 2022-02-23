import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.scss';
import axios from 'axios';
import { API_URL } from '../../config/constants';
import Spinner from '../spinner/Spinner';

function LoginModal( { closeModal } ) {

    //로딩 flag
    const [loadingFlag, setLoadingFlag] = useState(false);

    const navigate = useNavigate();

    //form 데이터를 저장할 state
    const [formData, setFormData] = useState({
        userId: "",
        userPwd: ""
    });

    const changeId = (e) => {
        // console.log(e.target.value);
        setFormData({
            ...formData,
            userId: e.target.value
        });
        // console.log(formData);
    }

    const changePwd = (e) => {
        // console.log(e.target.value);
        setFormData({
            ...formData,
            userPwd: e.target.value
        });
        // console.log(formData);
    }

    //회원가입 버튼 클릭
    const clickRegister = () => {
        closeModal();
        navigate("/register");
    }
    
    //로그인 버튼 클릭
    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.userId === ""){
            alert('아이디를 입력하세요');
        }else if(formData.userPwd === ""){
            alert('비밀번호를 입력하세요');
        }else{
            //로그인 로직 처리
            // console.log(formData);
            setLoadingFlag(true);  //로딩 중인 상태

            //비동기 전송으로 POST요청을 해주는 함수
            const url = `${API_URL}/login/${formData.userId}/${formData.userPwd}`;
            axios.post(url, formData)
            .then( (result) => {
                setLoadingFlag(false);  //로딩이 끝난 상태
                // console.log(result);
                // console.log(result.data);
                // console.log(result.data.length);
                
                if(result.data.length===0){
                    alert('입력하신 정보와 일치하는 회원이 없습니다.');
                }else {
                    // alert('로그인에 성공하였습니다!');
                    // console.log(`result.data[0].id: ${result.data[0].id}`);
                    
                    //세션에 추가하기
                    //sessionStorage에 key: user_id, Value: result.data[0].id 로 저장됨.
                    sessionStorage.setItem('user_id', result.data[0].id);

                    //세션에서 불러올 때 사용법
                    // sessionStorage.getItem('user_id');  
                    // console.log(sessionStorage.getItem('user_id'));  //결과: result.data[0].id

                    // 작업 완료 되면 페이지 이동(새로고침)
                    document.location.href = '/';

                    //로그인 모달 닫기 - 위에서 새로고침 작업을 추가하니 닫지 않아도 사라진다.
                    // closeModal();
                }
            })
            .catch( (err) => console.error(err));
        }
    }

    return (
        <div className='overlay'>
            <div className='login-wrap'>
            { loadingFlag && <Spinner />}
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