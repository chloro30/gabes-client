import React from 'react';
import MapIterator_arr from '../module/MapIterator_arr';
import ProductIntro from '../module/ProductIntro';

function SpecialMenu({specialProducts}) {

    const srcInit = specialProducts[0].src

    return (
        <div className='specialmenu-container'>
            <div className='inner-con'>
                <p>특별 메뉴</p>
                <MapIterator_arr products={specialProducts} />
                <ProductIntro srcInit={srcInit} />
            </div>
        </div>
    );
}

export default SpecialMenu;