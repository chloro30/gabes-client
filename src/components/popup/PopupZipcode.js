import React from 'react';
import DaumZipcode from 'react-daum-postcode';

function PopupZipcode({onClose, returnData}) {

    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handleZipcode = (data) => {
        // console.log(data);
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        
        // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        let roadAddr = data.roadAddress; // 도로명 주소 변수
        let extraAddr = ''; // 참고 항목 변수

        // 건물명이 있고, 공동주택일 경우 상세주소에 추가한다.
        if(data.buildingName !== '' && data.apartment === 'Y'){
            extraAddr += ((extraAddr !== '') ? (', ' + data.buildingName) : (data.buildingName));
        }

        // 건물명만 있어도 상세주소에 추가한다.
        if(data.buildingName !== ''){
            extraAddr += data.buildingName;
        }

        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if(extraAddr !== ''){
            extraAddr = ' (' + extraAddr + ')';
        }

        // 우편번호를 변수에 담는다.
        const zipcode = data.zonecode;
        
        // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
        if(roadAddr !== ''){
            roadAddr += extraAddr;
        } else {
            roadAddr += '';
        }

        // console.log(`우편번호: ${zipcode}`);
        // console.log(roadAddr);

        returnData(zipcode, roadAddr);

    }

    const zipcodeStyle = {
        display: "block",
        position: "absolute",
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        width: "600px",
        height: "600px",
        border: "2px solid #666"
    };

    const closeBtnStyle = {
        position: "absolute",
        bottom: "20%",
        right: "20%"
    }
    return(
        <div>
            <DaumZipcode style={zipcodeStyle} onComplete={handleZipcode} />
            {/* <DaumZipcode onComplete={handleZipcode} /> */}
            {/* 닫기 버튼 생성 */}
            {/* <button style={closeBtnStyle} type='button' onClick={() => onClose()} className='zipcode_btn'>팝업 닫기</button> */}
        </div>
    )
}

export default PopupZipcode;