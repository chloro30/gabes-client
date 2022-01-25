import React from 'react';

function ProductIntro({srcInit}) {
    return (
        <div className='intro-div'>
            <div className='intro-img'>
                <img src={srcInit} alt="초기_이미지" />
            </div>
            <div className='intro-desc'>
                
            </div>
        </div>
    );
}

export default ProductIntro;