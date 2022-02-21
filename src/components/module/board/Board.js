import './Board.scss';
import React, { useEffect, useState } from 'react';
import BoardTable from './BoardTable';
import BoardPage from './BoardPage';
import axios from 'axios';
import { API_URL } from '../../config/constants';
import Spinner from '../spinner/Spinner';

function Board() {

    /* 전체 공지사항 */
    //공지사항 게시글 데이터들이 담긴 리스트
    const [noticeList, setNoticeList] = useState([]);

    /*서버를 통해 DB에 있는 notice 테이블 데이터 받아오기 */
    useEffect(() => {
        //비동기 전송으로 get요청을 해주는 함수
        // const url = `http://localhost:8080/board/notice`;
        const url = `${API_URL}/board/notice`;
        axios.get(url)
        .then((response) => {
            // console.log(response.data);
            setNoticeList(response.data);
        })
        .catch((err) => console.error(err));
    }, []);

    /* BoardPage 시작 */
    /*
        page: 현재 데이터를 표시하는 페이지를 나타낼 값 
        limit: 한 페이지에서 가져올 데이터의 한계치를 나타내는 값
        전체 페이지 수 : (전체 데이터 수) / limit
    */
    const total_length = noticeList.length;  //전체 데이터 수
    // console.log(total_length);
    const page = 1;
    const limit = 10;  //서버의 DB SQL문에서 LIMIT절의 두번째 인자와 일치해야한다.

    // 전체 페이지 수 구하기
    let page_arr = [];  //페이지 들을 담은 배열

    for(let i = 1; i <= Math.ceil(total_length / limit); i++) {
        page_arr.push(i);
    }
    // console.log(page_arr);
    // console.log(page_arr.length);  //전체 페이지 수

    //다른 페이지 클릭 했을 때 현재 페이지 변경하는 함수
    const [currentPage,setCurrentPage] = useState(page);
    
    const changePage = (page) => {
        setCurrentPage(page);
        // console.log(currentPage);
    }

    const onFirstPage = () => {
        setCurrentPage(1);
    }
    const onLastPage = () => {
        setCurrentPage(page_arr.length);
    }
    /* Boardpage 끝 */


    /* 공지사항 제한된 갯수만 */
    const [noticeLimit, setNoticeLimit] = useState([]);
    useEffect(() => {
        // console.log(currentPage);
        // const url = `http://localhost:8080/board/notice/limit/${currentPage}`;
        const url = `${API_URL}/board/notice/limit/${currentPage}`;

        axios.get(url)
        .then((response) => {
            // console.log(response.data);
            setNoticeLimit(response.data);
        })
        .catch((err) => console.error(err));

    }, [currentPage]);


    //로딩 시간 확보하기
    const [loadingFlag, setLoadingFlag] = useState(true);
    setTimeout(() => {
        setLoadingFlag(false);
    }, 1200);


    return (
        <div className='board'>
            { loadingFlag && <Spinner />}
            <BoardTable list={noticeLimit} />
            <BoardPage all_page={page_arr} page={currentPage} changePage={changePage} onFirstPage={onFirstPage} onLastPage={onLastPage} />
        </div>
    );
}

export default Board;