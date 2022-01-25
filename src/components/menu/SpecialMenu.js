import React from 'react';
import MapIterator_arr from '../module/MapIterator_arr';

function SpecialMenu({specialProducts}) {
    return (
        <div className='specialmenu-container'>
            <div className='inner-con'>
                <p>특별 메뉴</p>
                <MapIterator_arr products={specialProducts} />
            </div>
        </div>
    );
}

export default SpecialMenu;