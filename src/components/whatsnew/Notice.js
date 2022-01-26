import React from 'react';
import boardData from '../../data/boardDatas.json';
import Board from '../module/board/Board';
import '../scss/Notice.scss';

function Notice() {

    const list = boardData.notice;  //공지사항 게시글 데이터

    return (
        <section className='notice-con'>
            <div className='notice-container'>
                <div className='inner-con'>
                    <Board list={list} />
                </div>
            </div>
        </section>
    );
}

export default Notice;