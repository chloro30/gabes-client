//아이디 유효성 검사
export const checkId = (idInput) => {
    console.log(`아이디: ${idInput.current.value}`);

    if(!idInput.current.value){
        alert('아이디를 입력하세요!');
        return false;
    }else{
        return true;
    }
    // 에러 만들어서 보내기
    // const err = new Error;
    // throw err;
}


//비밀번호 유효성 검사
export const checkPassword = (passwordInput,passwordCheckInput) => {
    console.log(`비밀번호: ${passwordInput.current.value}, 비밀번호 확인: ${passwordCheckInput.current.value}`);

    if(!passwordInput.current.value){
        alert('비밀번호를 입력하세요!');
        return false;
    }else if(!passwordCheckInput.current.value){
        alert('비밀번호 확인을 입력하세요!');
        return false;
    }else if(passwordInput.current.value !== passwordCheckInput.current.value){
        alert('비밀번호가 일치하지 않습니다!');
        return false;
    }else{
        return true;
    }
}


// 이름 유효성 검사
export const checkName = (nameInput) => {
    console.log(`이름: ${nameInput.current.value}`);

    if(!nameInput.current.value){
        alert('이름을 입력하세요!');
        return false;
    }else{
        return true;
    }
}
// 연락처 유효성 검사
export const checkPhone = (phoneInput) => {
    console.log(`연락처: ${phoneInput.current.value}`);
    if(!phoneInput.current.value){
        alert('연락처를 입력하세요!');
        return false;
    }else{
        return true;
    }
}
// 생년월일 유효성 검사
export const checkBirthday = (birthdayInput) => {
    console.log(`생년월일: ${birthdayInput.current.value}`);
    if(!birthdayInput.current.value){
        alert('생년월일을 입력하세요!');
        return false;
    }else{
        return true;
    }
}
// 성별 유효성 검사
export const checkGender = (genderInput1, genderInput2) => {

    if(genderInput1.current.checked){
        console.log(`여성: ${genderInput1.current.value}`);
        return true;
    }else if(genderInput2.current.checked){
        console.log(`남성: ${genderInput2.current.value}`);
        return true;
    }else{
        alert('성별을 체크하세요!');
        return false;
    }
}
// 주소 유효성 검사
export const checkAddr = (addrInput) => {
    console.log(`주소: ${addrInput.current.value}`);
    if(!addrInput.current.value){
        alert('주소를 입력하세요!');
        return false;
    }else{
        return true;
    }
}