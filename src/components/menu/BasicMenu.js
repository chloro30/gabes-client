import React from 'react';
import MapIterator_arr from '../module/MapIterator_arr';

function BasicMenu( {basicProducts} ) {


    return (
        <div className='basicmenu-container'>
            <div className='inner-con'>
                <p>기본 메뉴</p>
                <MapIterator_arr products={basicProducts} />
            </div>
        </div>
    );
}

export default BasicMenu;