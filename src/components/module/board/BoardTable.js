import React from 'react';

function BoardTable({list}) {
 
    console.log(list);
    // const list = list.notice;
    // console.log(list[0].date);

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
                            <div className='no'>{data.no}</div>
                            <div className='title'>{data.title}</div>
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