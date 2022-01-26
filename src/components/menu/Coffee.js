/* eslint-disable */

import React, { useState } from 'react';
import '../scss/Coffee.scss';
import AllCoffee from './AllCoffee';
import BasicMenu from './BasicMenu';
import SpecialMenu from './SpecialMenu';
import products from '../../data/products.json';

function Coffee() {

    const [allProducts, setAllProducts] = useState(products);       //전체 상품
    const [basicProducts, setBasicProductss] = useState(allProducts.coffee.basic);        //기본 상품
    const [specialProducts, setSpecialProducts] = useState(allProducts.coffee.special);  //특별 상품

    return (
        <section className='coffee-con'>
            <AllCoffee allProducts={allProducts} />
            <BasicMenu basicProducts={basicProducts} />
            <SpecialMenu specialProducts={specialProducts} />
        </section>
    );
}

export default Coffee;