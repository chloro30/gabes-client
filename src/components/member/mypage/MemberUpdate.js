import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../../config/constants';
import axios from 'axios';
import useAsync from '../../hook/useAsync';
import Spinner from '../../module/spinner/Spinner';
import {Table, TableBody, TableCell, TableRow} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import PopupDom from '../../popup/PopupDom';
import PopupZipcode from '../../popup/PopupZipcode';
import '../../scss/MemberUpdate.scss';


//POST 전송하기위해 사용자 아이디를 객체형식으로 변수에 담음
const userId = {
    userId: sessionStorage.getItem('user_id')
}
// console.log(userId);

//응답받은 데이터를 리턴해줌
async function getMember(){
    const url = `${API_URL}/member`;

    const response = await axios.post(url, userId);
    // console.log(response.data);
    return response;
}


function MemberUpdate() {

    const navigate = useNavigate();

    const zipcodeInput = useRef();        //우편번호
    const roadAddressInput = useRef();    //도로명 주소
    const detailAddressInput = useRef();  //상세 주소

    /* 입력 데이터 state로 관리 */
    const [ formData, setFormData ] = useState({
        userPwd: "",
        userPwdCk: "",
        userPhone: "",
        userAddress: ""
    });

    /* 주소 */
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // useEffect(()=>{
    //     console.log(formData);
    // },[formData]);


    const state = useAsync(getMember);
    const { loading, data:memberData, error } = state;

    //로딩중이라면?
    if(loading) return <Spinner />;

    // 에러가 발생했다면?
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>;
    // 데이터가 없다면?
    if(!memberData) return null;

    // console.log(memberData.data);



    // 비밀번호 입력 데이터
    const onChangePwd = (e) => {
        setFormData({
            ...formData,
            userPwd: e.target.value
        });
    }

    // 비밀번호 확인 입력 데이터
    const onChangePwdCk = (e) => {
        setFormData({
            ...formData,
            userPwdCk: e.target.value
        });
    }

    // 연락처 입력 데이터
    const onChangePhone = (e) => {
        setFormData({
            ...formData,
            userPhone: e.target.value
        });
    }

    //다음 우편번호 API 팝업 오픈
    const openDaumApi = () => {
        setIsPopupOpen(true);
    }

    //다음 우편번호 API 팝업 닫기
    const closeDaumApi = () => {
        setIsPopupOpen(false);
    }

    const returnData = (zipcode, roadAddr) => {
        // console.log(`우편번호: ${zipcode}`);
        // console.log(roadAddr);
        zipcodeInput.current.value = zipcode;
        roadAddressInput.current.value = roadAddr;

        //새로운 주소 정보 저장하기
        setFormData({
            ...formData,
            userAddress: "(" + zipcodeInput.current.value + ")" + " "
                        + roadAddressInput.current.value
        });
    }

    //유효성 검사 - validation
    const validation = () => {
        if(formData['userPwd']==""){
            alert("비밀번호를 입력하세요.");
            return false;
        }else if(formData['userPwdCk']==""){
            alert("비밀번호 확인을 입력하세요.");
            return false;
        }else if(formData['userPwd'] != formData['userPwdCk']){
            alert("비밀번호가 일치하지 않습니다.")
        }else{
            return true;
        }
    }


    
    // 회원정보 수정하기
    const onUpdate = (no) => {
        
        if(!validation()){
            // alert("유효성 검사 - false");

        }else{
            //서버에 전송할 데이터 양식
            let sendFormData = {
                "no": no,
                "pwd": "",
                "phone": "",
                "address": ""
            }
    
    
            // 비밀번호 변경
            if(formData['userPwd']==""){
                // console.log(memberData.data[0].pwd);
                sendFormData = {
                    ...sendFormData,
                    "pwd": memberData.data[0].pwd
                }
            }else{
                // console.log(formData['userPwd']);
                sendFormData = {
                    ...sendFormData,
                    "pwd": formData['userPwd']
                }
            }
    
            // 연락처 변경
            if(formData['userPhone']==""){
                // console.log(memberData.data[0].phone);
                sendFormData = {
                    ...sendFormData,
                    "phone": memberData.data[0].phone
                }
                // console.log(formData);
            }else{
                // console.log(formData['userPhone']);
                sendFormData = {
                    ...sendFormData,
                    "phone": formData['userPhone']
                }
            }
            
            // 주소 변경
            let newAddress = formData['userAddress'] + " " + detailAddressInput.current.value;
    
            if(newAddress==" "){
                // console.log(memberData.data[0].address);
                sendFormData = {
                    ...sendFormData,
                    "address": memberData.data[0].address
                }
            }else{
                // console.log(newAddress);
                sendFormData = {
                    ...sendFormData,
                    "address": newAddress
                }
            }
            
    
            const ask = window.confirm("회원정보를 수정하시겠습니까? 😮");
            // console.log(sendFormData);
    
            if(ask){
                //서버에 PUT 요청
                const url = `${API_URL}/member/update`;
                axios.put(url, sendFormData)
                .then( (result) => {
                    // console.log(`${no}번 회원 수정 완료`);
                    alert("회원정보가 수정되었습니다. 😉");
                    navigate("/mypage", {replace:true});  //리다이렉트로 마이페이지 이동
                })
                .catch( (err) => console.error(err));
            }
        }

    }


    // 전화번호 정규식
    // type 매개변수에 0을 넣으면 중간번호가 *로 표시된다.
    function phoneFomatter(num, type){
        let formatNum = '';

        if(num.length===11){
            if(type===0){
                formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
            }else{
                formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            }
        }else if(num.length===8){
            formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
        }else{
            if(num.indexOf('02')===0){
                if(type===0){
                    formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
                }else{
                    formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
                }
            }else{
                if(type===0){
                    formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
                }else{
                    formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                }
            }
        }
        return formatNum;
    }

    return (
        <section className='update-con'>
            <div className='update-container inner-con'>
                <h2>회원 정보 수정</h2>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>회원번호</TableCell>
                            <TableCell>{memberData.data[0].no}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>아이디</TableCell>
                            <TableCell>{memberData.data[0].id}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>비밀번호</TableCell>
                            <TableCell><input type="password" name="pwd" onChange={onChangePwd} required /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>비밀번호 확인</TableCell>
                            <TableCell><input type="password" name="pwdCk" onChange={onChangePwdCk} required /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>이름</TableCell>
                            <TableCell>{memberData.data[0].name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>연락처</TableCell>
                            <TableCell><input type="text" name="phone" defaultValue={phoneFomatter(memberData.data[0].phone)} onChange={onChangePhone} required /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>생년월일</TableCell>
                            <TableCell>{memberData.data[0].birthday.slice(0,10)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>성별</TableCell>
                            <TableCell>{memberData.data[0].gender}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>현재 주소</TableCell>
                            <TableCell>{memberData.data[0].address}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>주소 변경</TableCell>
                            <TableCell>
                                {/* <input type="text" name="c_addr" value={formData.c_addr} onChange={onChange} /> */}
                                <input ref={zipcodeInput} type="text" placeholder="우편번호" readOnly />&nbsp;
                                <button type="button" onClick={openDaumApi}>우편번호 찾기</button>
                                <div id='popupDom'>
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupZipcode onClose={closeDaumApi} returnData={returnData} />
                                        </PopupDom>
                                    )}
                                </div>
                                <br/>
                                <input ref={roadAddressInput} type="text" placeholder="도로명 주소" readOnly />&nbsp;
                                <input ref={detailAddressInput} type="text" placeholder="상세 주소" required />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>가입일</TableCell>
                            <TableCell>{memberData.data[0].register_date.slice(0,10)+" "+memberData.data[0].register_date.slice(11,19)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <div>
                                    <button onClick={() => onUpdate(memberData.data[0].no)}>수정완료</button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}

export default MemberUpdate;