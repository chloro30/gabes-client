import React from 'react';
import { Link } from 'react-router-dom';
import Board from '../../module/board/Board';
import '../../scss/Notice.scss';

function Notice() {
    
    return (
        <section className='notice-con'>
            <div className='notice-container'>
                <div className='inner-con'>
                    <Board />
                    <Link to="/board/notice/upload"><button className='btn upload-btn'>등록하기</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Notice;