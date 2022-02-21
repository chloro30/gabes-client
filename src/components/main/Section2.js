import React, { useEffect, useRef, useState } from 'react';

function Section2() {

    //parallax 적용할 엘리먼트
    const parallaxImg = useRef();
    // console.log(parasDiv.current.offsetTop); // null 에러

    const [scrollValue, setScrollValue] = useState(0);

    const [transformValue, setTransformValue] = useState(-130);
    
    const onScroll = (e) => {

        // console.log(e.target.scrollingElement.scrollTop);  //리액트에서 scroll 위치 값 얻기

        setScrollValue(e.target.scrollingElement.scrollTop);
        console.log(`scrollValue: ${scrollValue}`);

    }
    
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);

        if(scrollValue >= 850){
            setTransformValue(0);
            console.log(parallaxImg.current.style);
        }


        
    }, [scrollValue]);
    return (
        <div className='section2'>
            <div className='inner-con'>
                <div>
                    <img ref={parallaxImg}
                        src='img/main/section2/2022_hawaii_title.png' 
                        alt='하와이 텍스트'
                        style={{
                            transform: `translateX(${transformValue}%)`
                        }}
                     />
                    <button>자세히 보기</button>
                </div>    
            </div>
        </div>
    );
}

export default Section2;