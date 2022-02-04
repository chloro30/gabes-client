import React from 'react';
import Board from '../../module/board/Board';
import '../../scss/Notice.scss';
import { useNavigate } from 'react-router-dom';

function Notice() {
    const navigate = useNavigate();

    return (
        <section className='notice-con'>
            <div className='notice-container'>
                <div className='inner-con'>
                    <h2>공지사항</h2>
                    <Board />
                    {/* <button onClick={toUploadForm} className='btn upload-btn'>등록하기</button> */}
                    <button onClick={()=>navigate("/board/notice/upload", {replace: false})} className='btn upload-btn'>등록하기</button>
                </div>
            </div>
        </section>
    );
}

export default Notice;