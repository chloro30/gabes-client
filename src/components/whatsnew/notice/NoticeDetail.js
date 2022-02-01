import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '../../hook/useAsync';
import '../../scss/NoticeDetail.scss';


function NoticeDetail() {

    //라우터 파라미터 받기
    const { no } = useParams();
    // console.log(no);


    // 해당 id의 고객 정보 받아오기
    async function getNotice(){
        const url = `http://localhost:8080/board/notice/${no}`;
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

    // console.log(notice[0]);

    return (
        <section className='detail-con'>
            <div className='detail-container'>
                <div className='inner-con'>
                    <table>
                        <tbody>
                            <tr>
                                <th>제목</th>
                                <td>{notice[0].title}</td>
                            </tr>
                            <tr>
                                <th>작성일</th>
                                <td>{notice[0].date.slice(0,10)}</td>
                            </tr>
                            <tr>
                                <th>작성자</th>
                                <td>{notice[0].writer}</td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td>{notice[0].description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default NoticeDetail;