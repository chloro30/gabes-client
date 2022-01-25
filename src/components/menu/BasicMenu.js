import React from 'react';
import MapIterator_arr from '../module/MapIterator_arr';
import ProductIntro from '../module/ProductIntro';

function BasicMenu( {basicProducts} ) {

    const srcInit = basicProducts[0].src

    return (
        <div className='basicmenu-container'>
            <div className='inner-con'>
                <p>기본 메뉴</p>
                <MapIterator_arr products={basicProducts} />
                <ProductIntro srcInit={srcInit} />
            </div>
        </div>
    );
}

export default BasicMenu;