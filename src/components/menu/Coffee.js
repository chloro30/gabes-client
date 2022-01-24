import React from 'react';
import '../scss/Coffee.scss';
import AllCoffee from './AllCoffee';
import BasicMenu from './BasicMenu';
import SpecialMenu from './SpecialMenu';

function Coffee() {
    return (
        <section className='coffee-con'>
            <AllCoffee />
            <BasicMenu />
            <SpecialMenu />
        </section>
    );
}

export default Coffee;