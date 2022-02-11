/* eslint-disable */

import React, { useEffect, useState } from 'react';
import MapIteratorEvent from '../../module/MapIteratorEvent';
import ProductIntro from '../../module/ProductIntro';

function BasicMenu( {basicProducts, clickedMenu} ) {
    
    //초기화
    const [item, setItem] = useState(basicProducts[0]);

    //모든 메뉴에서 클릭시 item을 그 클릭된 상품으로 변경
    useEffect(()=>{
        if(clickedMenu){
            setItem(clickedMenu);
        }
    },[clickedMenu]);

    /* MapIterator_arr 시작 */
    const changeItem = (item) => {
        setItem(item);
    }
    /* MapIterator_arr 끝 */

    return (
        <div id='basic' className='basicmenu-container'>
            <div className='inner-con'>
                <p>기본 메뉴</p>
                <MapIteratorEvent products={basicProducts} changeItem={changeItem} />
                <ProductIntro item={item} />
            </div>
        </div>
    );
}

export default BasicMenu;