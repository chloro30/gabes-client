import React from 'react';
import '../scss/Main.scss';
import Slider from '../slider/Slider';
import Section1 from './Section1';
import Section2 from './Section2';

function Main() {
    return (
        <section className='main-con'>
            <div className='slider-div'>
                <Slider />
            </div>
            <div className='section1'>
                <Section1 />
            </div>
            <div className='section2'>
                <Section2 />
            </div>
        </section>
    );
}

export default Main;