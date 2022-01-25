import React, { useState } from 'react';
import '../scss/Coffee.scss';
import AllCoffee from './AllCoffee';
import BasicMenu from './BasicMenu';
import SpecialMenu from './SpecialMenu';
import products from '../../data/products.json';

function Coffee() {

    const [allProducts, setAllProducts] = useState(products);       //전체 상품
    // const [basics, setBasics] = useState(allProducts.basic);        //기본 상품
    // const [specials, setSpecials] = useState(allProducts.special);  //특별 상품

    return (
        <section className='coffee-con'>
            <AllCoffee allProducts={allProducts} />
            <BasicMenu  />
            <SpecialMenu />
        </section>
    );
}

export default Coffee;