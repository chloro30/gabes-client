import '../../scss/Board.scss';
import React from 'react';

import BoardPage from './BoardPage';
import TableBoard from './TableBoard';

function Board({list}) {
    /*
        page: 현재 데이터를 표시하는 페이지를 나타낼 값 
        limit: 한 페이지에서 가져올 데이터의 한계치를 나타내는 값
        전체 페이지 수 : (전체 데이터 수) / limit
    */
    const total_length = list.length;  //전체 데이터 수
    console.log(total_length);
    const page = 1;
    const limit = 5;


    // 전체 페이지 수 구하기
    let page_arr = [];  //페이지 들을 담은 배열

    for(let i = 1; i <= Math.ceil(total_length / limit); i++) {
        page_arr.push(i);
    }
    console.log(page_arr);
    console.log(page_arr.length);  //전체 페이지 수




    return (
        <div className='board'>
            <TableBoard list={list} />
            <BoardPage all_page={page_arr} page={page} />
        </div>
    );
}

export default Board;