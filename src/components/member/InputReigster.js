import React, { useRef, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import { checkId, checkPassword, checkName, checkPhone, checkBirthday, checkGender, checkAddr } from '../module/validation';
import PopupDom from '../popup/PopupDom';
import PopupZipcode from '../popup/PopupZipcode';

function InputReigster() {

    //form 요소 선택하기 - useRef()

    const idInput = useRef();
    const passwordInput = useRef();
    const passwordCheckInput = useRef();

    const nameInput = useRef();      //이름
    const phoneInput = useRef();     //연락처
    const birthdayInput = useRef();  //생년월일
    const genderInput1 = useRef();   //성별 - 여성
    const genderInput2 = useRef();   //성별 - 남성
    const zipcodeInput = useRef();        //우편번호
    const roadAddressInput = useRef();    //도로명 주소
    const detailAddressInput = useRef();  //상세 주소
    
    const inputs = [
        idInput,
        passwordInput,
        passwordCheckInput,
        nameInput,
        phoneInput,
        birthdayInput,
        genderInput1,
        genderInput2,
        zipcodeInput,
        roadAddressInput,
        detailAddressInput
    ];
    
    let address = "";      //주소 값들을 합칠 변수 선언
    let genderValue = "";  //성별에따라 값을 저장할 변수 선언

    //성별은 하나만 선택할 수 있도록 설정
    const genderChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.checked);
        if(e.target.value==="여성"){
            genderInput2.current.checked=false;
        }else if(e.target.value==="남성"){
            genderInput1.current.checked=false;
        }
    }

    // form 태그의 submit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();  //버튼의 기본 이벤트 제거

        if(genderInput1.current.checked){
            genderValue = "여성";
        }else if(genderInput2.current.checked){
            genderValue = "남성";
        }

        // console.log(`(${zipcodeInput.current.value}) ${roadAddressInput.current.value} ${detailAddressInput.current.value}`);
        address = `(${zipcodeInput.current.value}) ${roadAddressInput.current.value} ${detailAddressInput.current.value}`;
        // console.log(`주소: ${address}`);

        if(!checkInputs( ...inputs )){  //spread 구문으로 inputs 배열 요소들을 매개변수로 전달.
            return false;
        }else{
            // insertCustomer();  //서버에 고개 등록 요청
            
            // input 태그 값 비우기
            inputs.forEach(input => {
                input.current.value="";
            });
        }
    }





    // 유효성 검사
    const checkInputs = (idInput,passwordInput,passwordCheckInput,nameInput,phoneInput,birthdayInput,genderInput1,genderInput2,zipcodeInput,roadAddressInput,detailAddressInput) => {
        if(
            checkId(idInput) &&
            checkPassword(passwordInput, passwordCheckInput) &&
            checkName(nameInput) &&
            checkPhone(phoneInput) &&
            checkBirthday(birthdayInput) &&
            checkGender(genderInput1, genderInput2) &&
            checkAddr(zipcodeInput,roadAddressInput,detailAddressInput)
        ){
            return true;
        }else{
            return false;
        }
    }

    // // post 전송 axios
    // function insertCustomer() {
    //     // const url = "http://localhost:8080/addCustomer";

    //     const insertData = {
    //         c_name: nameInput.current.value,
    //         c_phone: phoneInput.current.value,
    //         c_birthday: birthdayInput.current.value,
    //         c_gender: genderValue,
    //         c_addr: address
    //     }

    //     const url = `${API_URL}/addCustomer`;
    //     axios.post(url, insertData)
    //     .then( (res) => console.log(res))
    //     .catch( (err) => console.error(err));
    // }

    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
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

    }

    return (
        <div className='register-container'>
            <h2>신규 고객 등록하기</h2>
            <div className='form-div'>
                <form onSubmit={onSubmit}>
                    <Table className='createTable'>
                        <TableBody>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>
                                    <input ref={idInput} type="text" required />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>비밀번호</TableCell>
                                <TableCell>
                                    <input ref={passwordInput} type="text" required />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>비밀번호 확인</TableCell>
                                <TableCell>
                                    <input ref={passwordCheckInput} type="text" required />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>이름</TableCell>
                                <TableCell>
                                    <input ref={nameInput} type="text" required />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>연락처</TableCell>
                                <TableCell>
                                    <input ref={phoneInput} type="text" required />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>생년월일</TableCell>
                                <TableCell>
                                    <input ref={birthdayInput} type="date"/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>성별</TableCell>
                                <TableCell>
                                    <label>여성<input ref={genderInput1} type="radio" value="여성" onChange={genderChange} /></label>&nbsp;&nbsp;
                                    <label>남성<input ref={genderInput2} type="radio" value="남성" onChange={genderChange} /></label>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>주소</TableCell>
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
                                <TableCell colSpan={2}>
                                    <button type="submit">등록</button>
                                    <button type="reset">취소</button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </form>
            </div>
        </div>
    );
}

export default InputReigster;