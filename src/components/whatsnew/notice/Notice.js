import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Board from '../../module/board/Board';
import '../../scss/Notice.scss';

function Notice() {

    //공지사항 게시글 데이터들이 담긴 리스트
    const [noticeList, setNoticeList] = useState([]);

    /*서버를 통해 DB에 있는 notice 테이블 데이터 받아오기 */

    //비동기 전송으로 get요청을 해주는 함수
    
    useEffect(() => {
        const url = `http://localhost:8080/board/notice`;
        axios.get(url)
        .then((response) => {
            // console.log(response.data);
            setNoticeList(response.data);
        })
        .catch((err) => console.error(err));

    }, []);

    return (
        <section className='notice-con'>
            <div className='notice-container'>
                <div className='inner-con'>
                    <Board list={noticeList} />
                    <Link to="/board/notice/upload"><button className='btn upload-btn'>등록하기</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Notice;