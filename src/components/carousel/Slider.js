import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import dataSlider from './dataSlider';
import Arrows from './Arrows';
import Dots from './Dots';
import './slider.css';

const len = dataSlider.length - 1;

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval( () => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);   //자동재생 시간 설정
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='slider-div'>
            <div className='slider-container inner-con'>
                <SliderContent activeIndex={activeIndex} imageSlider={dataSlider} />
                <Arrows 
                    prevSlide={ () => setActiveIndex( (activeIndex < 1) ? len : activeIndex - 1) } 
                    nextSlide={ () => setActiveIndex( (activeIndex === len) ? 0 : activeIndex + 1) } 
                />
                <Dots activeIndex={activeIndex} imageSlider={dataSlider} onclick={(activeIndex) => setActiveIndex(activeIndex)} />
            </div>
        </div>
    );
}

export default Slider;