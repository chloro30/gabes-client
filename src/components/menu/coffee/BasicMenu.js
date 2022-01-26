/* eslint-disable */

import React, { useState } from 'react';
import MapIterator_arr from '../../module/MapIterator_arr';
import ProductIntro from '../../module/ProductIntro';

function BasicMenu( {basicProducts} ) {
    
    //초기화
    const [item, setItem] = useState(basicProducts[0]);

    /* MapIterator_arr 시작 */
    const changeItem = (item) => {
        setItem(item);
    }
    /* MapIterator_arr 끝 */

    return (
        <div className='basicmenu-container'>
            <div className='inner-con'>
                <p>기본 메뉴</p>
                <MapIterator_arr products={basicProducts} changeItem={changeItem} />
                <ProductIntro item={item} />
            </div>
        </div>
    );
}

export default BasicMenu;