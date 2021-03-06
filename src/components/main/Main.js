import React from 'react';
import '../scss/Main.scss';
// import Slider from '../slider/Slider';
import Slider from '../carousel/Slider';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import SectionPara from './SectionPara';
import ScrollToTop from '../module/scroll/ScrollToTop';

function Main() {
    return (
        <section className='main-con'>
            <ScrollToTop />
            <Slider />
            <Section1 />
            <SectionPara />
            <Section2 />
            <Section3 />
        </section>
    );
}

export default Main;