import React from 'react';
import { Link } from 'react-router-dom';

function BoardTable({list}) {
 
    return (
        <div className='board-contents'>
            <div className='board-header'>
                <div className='no'> NO </div>
                <div className='title'> 제목 </div>
                <div className='writer'> 작성자 </div>
                <div className='date'> 등록일 </div>
            </div>
            { 
                list.map( (data) => {
                    return(
                        <div className='board-list' key={data.no}>
                            <div className='no'><Link to={`/board/notice/${data.no}`}>{data.no}</Link></div>
                            <div className='title'><Link to={`/board/notice/${data.no}`}>{data.title}</Link></div>
                            <div className='writer'>{data.writer}</div>
                            <div className='date'>{data.date.slice(0, 10)}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default BoardTable;