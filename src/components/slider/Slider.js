import React, {useState} from 'react';
import './css/Slider.css';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1);
        }else if(slideIndex === dataSlider.length){
            setSlideIndex(1);
        }

    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
        }else if(slideIndex === 1){
            setSlideIndex(dataSlider.length);
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
    }

    return (
        <div className='container-slider'>
            {
                dataSlider.map((obj, index) => {
                    return (
                        <div key={obj.id} className={ (slideIndex === index + 1) ? 'slide  active-anim' : 'slide' }>
                            <img src={`img/banner/banner0${index + 1}.png`} alt={`배너_이미지${index + 1}`} />
                            {/* obj.title 사용할 시 css로 위치를 position: absolute로 잡아줘야 할 듯(?) */}
                            {/* <p>{obj.title}</p> */}
                        </div>
                    )
                })
            }
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className='container-dots'>
            {Array.from({length: 5}).map((item, index) => (
                <div key={index} 
                     onClick={ () => moveDot(index + 1) }
                     className={(slideIndex === index + 1) ? 'dot active' : 'dot' }
                ></div>
            ))}
        </div>
        </div>
    );
}

export default Slider;