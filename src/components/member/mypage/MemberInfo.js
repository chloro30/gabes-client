import React from 'react';
import { API_URL } from '../../config/constants';
import axios from 'axios';
import useAsync from '../../hook/useAsync';
import Spinner from '../../module/spinner/Spinner';
import {Table, TableBody, TableCell, TableRow} from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../scss/MemberInfo.scss';


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

function MemberInfo() {

    const state = useAsync(getMember);
    const { loading, data:memberData, error } = state;

    //로딩중이라면?
    if(loading) return <Spinner />;

    // 에러가 발생했다면?
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>;
    // 데이터가 없다면?
    if(!memberData) return null;

    // console.log(memberData.data);


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
        <section className='mypage-con'>
            <div className='mypage-container inner-con'>
                <h2>회원 정보</h2>
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
                            <TableCell>이름</TableCell>
                            <TableCell>{memberData.data[0].name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>연락처</TableCell>
                            <TableCell>{phoneFomatter(memberData.data[0].phone)}</TableCell>
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
                            <TableCell>주소</TableCell>
                            <TableCell>{memberData.data[0].address}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>가입일</TableCell>
                            <TableCell>{memberData.data[0].register_date.slice(0,10)+" "+memberData.data[0].register_date.slice(11,19)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                {/* <button onClick={()=>alert('삭제클릭')}>삭제</button>
                                <button><Link to={`/`}>수정</Link></button> */}

                                <button onClick={()=>alert('삭제는 현재 보완중입니다. 😂')}>삭제</button>
                                <button onClick={()=>alert('수정은 현재 보완중입니다. 😂😂')}>수정</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}

export default MemberInfo;