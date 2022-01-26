import React, { useState } from 'react';

function BoardPage( {all_page, page} ) {

    // console.log(all_page, page);
    const [pageNow,setPageNow] = useState(page);

    //페이지 클릭 했을 때 변경하는 함수
    const changePage = (el) => {
        setPageNow(el)
        console.log(pageNow);
    }

    return (
        <div className='paging'>
            <div className='paging-first'>&lt;&lt;</div>
            <ul className='paging-middle'>
            {
                all_page.map( (el, index) => {
                    return(
                        (el === page) ? <li key={index} className='paging-num'> <b> {el} </b> </li>
                                        : <li key={index} className='paging-num' onClick={() => changePage(el)}> {el} </li>
                    )
                })
            }
            </ul>
            <div className='paging-last'>&gt;&gt;</div>
        </div>
    );
}

export default BoardPage;