/* eslint-disable */

import React, { useEffect, useState } from 'react';
import MapIteratorEvent from '../../module/MapIteratorEvent';
import ProductIntro from '../../module/ProductIntro';

function SpecialMenu({specialProducts, clickedMenu}) {

    //초기화
    const [item, setItem] = useState(specialProducts[0]);

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
        <div id='special' className='specialmenu-container'>
            <div className='inner-con'>
                <p>특별 메뉴</p>
                <MapIteratorEvent products={specialProducts} changeItem={changeItem} />
                <ProductIntro item={item} />
            </div>
        </div>
    );
}

export default SpecialMenu;