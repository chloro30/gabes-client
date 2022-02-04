import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
            const url = `http://localhost:8080/board/notice/update/${no}`;
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
                                    <td><input type="text" value={no} readOnly /></td>
                                </tr>
                                <tr>
                                    <th>제목</th>
                                    <td><input ref={titleInput} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>작성자</th>
                                    <td><input type="text" value="관리자" readOnly /></td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td><textarea ref={descInput} cols={50} rows={20}></textarea></td>
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