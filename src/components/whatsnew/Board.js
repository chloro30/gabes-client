import React from 'react';
import BoardTable from './BoardTable';

function Board() {
    return (
        <div className='notice-container'>
            <div className='inner-con'>
                <BoardTable />
            </div>
        </div>
    );
}

export default Board;