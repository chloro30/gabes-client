/* eslint-disable */

import React, { forwardRef, useEffect, useState } from 'react';
import MapIteratorEvent from '../../module/MapIteratorEvent';
import ProductIntro from '../../module/ProductIntro';

//부모 컴포넌트 <Coffee />에서 useRef() 사용하기 위해서 forwardRef로 생성
const BasicMenu =  forwardRef( ({basicProducts, clickedMenu}, ref ) => {
    
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
        <div ref={ref} id='basic' className='basicmenu-container'>
            <div className='inner-con'>
                <p>기본 메뉴</p>
                <MapIteratorEvent products={basicProducts} changeItem={changeItem} />
                <ProductIntro item={item} />
            </div>
        </div>
    );
});

export default BasicMenu;