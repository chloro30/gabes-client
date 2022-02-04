/* eslint-disable */

import React, { useState } from 'react';
import MapIteratorEvent from '../../module/MapIteratorEvent';
import ProductIntro from '../../module/ProductIntro';

function SpecialMenu({specialProducts}) {

    //초기화
    const [item, setItem] = useState(specialProducts[0]);

    /* MapIterator_arr 시작 */
    const changeItem = (item) => {
        setItem(item);
    }
    /* MapIterator_arr 끝 */

    return (
        <div className='specialmenu-container'>
            <div className='inner-con'>
                <p>특별 메뉴</p>
                <MapIteratorEvent products={specialProducts} changeItem={changeItem} />
                <ProductIntro item={item} />
            </div>
        </div>
    );
}

export default SpecialMenu;