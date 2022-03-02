import React, { useEffect, useState } from 'react';
import './ScrollToTop.scss';

function ScrollToTop() {

    //스크롤 값을 관리할 state
    const [scrollValue, setScrollValue] = useState(0);

    //top 버튼이 보일지 관리할 state
    const [visible, setVisible] = useState(false);

    
    const onScroll = (e) => {
        // console.log(e.target.scrollingElement.scrollTop);  //리액트에서 scroll 위치 값 얻기

        setScrollValue(e.target.scrollingElement.scrollTop);
        // console.log(`scrollValue: ${scrollValue}`);
    }

    const moveTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);

        // console.log(`브라우저의 화면 높이: ${window.innerHeight}`);

        if(scrollValue > 400){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }, [scrollValue]);


    if(!visible){
        return false;
    }

    return (
        <div className='scroll-to-top' onClick={moveTop}>
            <span>⬆</span>
        </div>
    );
}

export default ScrollToTop;