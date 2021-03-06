/* eslint-disable */

import React, { useEffect, useRef, useState } from 'react';
import '../../scss/Coffee.scss';
import AllCoffee from './AllCoffee';
import BasicMenu from './BasicMenu';
import SpecialMenu from './SpecialMenu';
import useAsync from '../../hook/useAsync';
import axios from 'axios';
import { API_URL } from '../../config/constants';
import Spinner from '../../module/spinner/Spinner';
import ScrollToTop from '../../module/scroll/ScrollToTop';


 //응답받은 데이터를 리턴해줌
 async function getCoffeeList(){
    // const url = `http://localhost:8080/menu/coffee`;
    const url = `${API_URL}/menu/coffee`;
    
    const response = await axios.get(url);
    // console.log(response.data);
    return response;
}


function Coffee() {

    const basicRef = useRef(null);
    const specialRef = useRef(null);


    // 모든 메뉴에서 basic 상품 클릭시 상세 보기에도 적용시키기
    const [clickedMenuBasic, setClickedMenuBasic] = useState(null);

    // 모든 메뉴에서 special 상품 클릭시 상세 보기에도 적용시키기
    const [clickedMenuSpecial, setClickedMenuSpecial] = useState(null);

    const allMenuClick = (product) => {
        if(product.category === 'basic'){
            setClickedMenuBasic(product);
            window.scrollTo({
                top: basicRef.current.offsetTop,
                behavior: "smooth"
            });
        }else if(product.category === 'special'){
            setClickedMenuSpecial(product);
            window.scrollTo({
                top: specialRef.current.offsetTop,
                behavior: "smooth"
            });
        }
    }
   
    const state = useAsync(getCoffeeList);
    const { loading, data:coffeeData, error } = state;

    //로딩중이라면?
    // if(loading) return <div>로딩중...</div>
    if(loading) return <Spinner />

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
            <ScrollToTop />
            <AllCoffee products={coffeeList} allMenuClick={allMenuClick} />
            <BasicMenu ref={basicRef} basicProducts={basicProducts} clickedMenu={clickedMenuBasic} />
            <SpecialMenu ref={specialRef} specialProducts={specialProducts} clickedMenu={clickedMenuSpecial} />
        </section>
    );
}

export default Coffee;