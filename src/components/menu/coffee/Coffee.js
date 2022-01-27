/* eslint-disable */

import React from 'react';
import '../../scss/Coffee.scss';
import AllCoffee from './AllCoffee';
import BasicMenu from './BasicMenu';
import SpecialMenu from './SpecialMenu';
import useAsync from '../../hook/useAsync';
import axios from 'axios';


 //응답받은 데이터를 리턴해줌
 async function getCoffeeList(){
    const url = `http://localhost:8080/coffee`;
    
    const response = await axios.get(url);
    // console.log(response.data);
    return response;
}


function Coffee() {

    const state = useAsync(getCoffeeList);
    const { loading, data:coffeeData, error } = state;

    //로딩중이라면?
    if(loading) return <div>로딩중...</div>
    // 에러가 발생했다면?
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    // 데이터가 없다면?
    if(!coffeeData) return null;

    // console.log(coffeeData.data);


    const coffeeList = [ ...coffeeData.data ];     //전체 상품
    let basicProducts = [];    //기본 상품
    let specialProducts = [];  //특별 상품

    coffeeList.forEach( coffee => {
        if(coffee.code.startsWith("b")){
            // console.log(`basic: ${coffee.name}`);
            basicProducts.push(coffee);
        }else{
            // console.log(`special: ${coffee.name}`);
            specialProducts.push(coffee);
        }
    });

    return (
        <section className='coffee-con'>
            <AllCoffee products={coffeeList} />
            <BasicMenu basicProducts={basicProducts} />
            <SpecialMenu specialProducts={specialProducts} />
        </section>
    );
}

export default Coffee;