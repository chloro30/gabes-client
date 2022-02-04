import React from 'react';
import { useNavigate } from 'react-router-dom';
import Board from '../../module/board/Board';
import '../../scss/Event.scss';

function Event() {
    const navigate = useNavigate();

    return (
        <section className='event-con'>
            <div className='event-container'>
                <div className='inner-con'>
                    <h2>이벤트</h2>
                    <Board />
                    <button onClick={()=>navigate("/board/event/upload", {replace: false})} className='btn upload-btn'>등록하기</button>
                </div>
            </div>
        </section>
    );
}

export default Event;