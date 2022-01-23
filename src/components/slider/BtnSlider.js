import React from 'react';
import leftArrow from './icons/left-arrow.png';
import rightArrow from './icons/right-arrow.png';

function BtnSlider( { moveSlide, direction } ) {

    // console.log(direction, moveSlide);

    return (
        <button className={ (direction === 'next') ? 'btn-slide next' : 'btn-slide prev' } onClick={moveSlide}>
            <img src={ (direction === 'next') ? rightArrow : leftArrow } alt='화살표' />
        </button>
    );
}

export default BtnSlider;