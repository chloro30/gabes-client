import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../config/constants';
import useAsync from '../../hook/useAsync';
import '../../scss/NoticeUpdate.scss';

function NoticeUpdate() {
    //라우터 파라미터 받기
    const { no } = useParams();
    // console.log(no);

    const titleInput = useRef();
    const descInput = useRef();

    const navigate = useNavigate();

    const checkForm = () => {
        if(titleInput.current.value === ""){
            alert('제목을 입력해 주세요');
            return false;
        }else if(descInput.current.value === ""){
            alert('내용을 입력해 주세요');
            return false;
        }else{
            return true;
        }
    }

    //기존 내용을 defaultValue로 입력하기위해 데이터 불러오기
    // 해당 no의 공지사항 글 받아오기
    async function getNotice(){
        // const url = `http://localhost:8080/board/notice/${no}`;
        const url = `${API_URL}/board/notice/${no}`;
        const response = await axios.get(url);
        return response.data;
    }

    /* 비동기 시작 */
    const state = useAsync(getNotice);
    const { loading, error, data:notice } = state;

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>;
    if(!notice) return null;
    /* 비동기 종료 */




    const onSubmit = (e) => {
        e.preventDefault();

        // console.log(titleInput.current.value, descInput.current.value);
        
        const uploadTime = new Date();
        // console.log(dateFormat(uploadTime).slice(0,10));

        const uploadData = {
            title: titleInput.current.value,
            desc: descInput.current.value,
            writer: '관리자',
            // date: dateFormat(uploadTime).slice(0,10)
            // date: dateFormat(uploadTime)
            date: dateFormat(uploadTime)
        }

        // console.log(uploadData);

        if(checkForm()){
            //서버에 수정 전송
            // const url = `http://localhost:8080/board/notice/update/${no}`;
            const url = `${API_URL}/board/notice/update/${no}`;
            axios.put(url, uploadData)
            .then( (res) => {
                // console.log(res)
                alert('수정완료')
                navigate("/board/notice", {replace:true});
            })
            .catch( (err) => console.error(err));
        }
        
    }

    //날짜 포맷팅
    function dateFormat(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        month = (month >= 10) ? month : ('0' + month);
        day = (day >= 10) ? day : ('0' + day);
        hour = (hour >= 10) ? hour : ('0' + hour);
        minute = (minute >= 10) ? minute : ('0' + minute);
        second = (second >= 10) ? second : ('0' + second);

        return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }

    return (
        <section className='upform-con'>
            <div className='upform-container'>
                <div className='inner-con'>
                    <h2>공지사항 수정하기</h2>
                    <form onSubmit={onSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>번호</th>
                                    <td><input type="text" value={notice[0].no} readOnly /></td>
                                </tr>
                                <tr>
                                    <th>제목</th>
                                    <td><input ref={titleInput} type="text" defaultValue={notice[0].title} required /></td>
                                </tr>
                                <tr>
                                    <th>작성자</th>
                                    <td><input type="text" value="관리자" readOnly /></td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td><textarea ref={descInput} cols={50} rows={20} defaultValue={notice[0].description} required></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='btns'>
                            <button className='btn' type='submit'>등록</button>
                            <button className='btn' type='reset' onClick={()=>navigate('/board/notice')}>취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default NoticeUpdate;