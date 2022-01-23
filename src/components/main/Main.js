import React from 'react';
import '../scss/Main.scss';
import Slider from '../slider/Slider';

function Main() {
    return (
        <section className='main-con'>
            <div className='inner-con'>
                <Slider />
                <div>슬라이더 아랫부분</div>
            </div>
        </section>
    );
}

export default Main;