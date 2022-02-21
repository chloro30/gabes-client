import React, { useEffect, useRef, useState } from 'react';

function SectionPara() {

    //parallax 적용할 엘리먼트
    const parasDiv = useRef();
    // console.log(parasDiv.current.offsetTop); // null 에러

    const [scrollValue, setScrollValue] = useState(0);
    
    const onScroll = (e) => {

        // console.log(e.target.scrollingElement.scrollTop);  //리액트에서 scroll 위치 값 얻기

        setScrollValue(e.target.scrollingElement.scrollTop);
        console.log(`scrollValue: ${scrollValue}`);

    }
    
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);

        // console.log(`paraDiv까지 스크롤: ${parasDiv.current.offsetTop}`);
        // console.log(`브라우저의 화면 높이: ${window.innerHeight}`);
        // console.log(parasDiv);
        
    }, [scrollValue]);

    return (
        <section className='sectionPara'>
            <div className='inner-con'>
                <div ref={parasDiv} className='paras'>
                    <p style={{
                        opacity: (scrollValue - 300) / 200}
                    }>
                        에이리스트
                    </p>
                    <p style={{
                        opacity: (scrollValue - 400) / 200}
                    }>
                        TWOSOME<br/>
                        IN YOUR MUG, A LIST
                        </p>
                    <p style={{
                        opacity: (scrollValue - 500) / 200}
                    }>
                        언제 어디서나 여유롭게 즐기는 에이리스트
                    </p>
                    <p style={{
                        opacity: (scrollValue - 600) / 200}
                    }>
                        좋은 커피를 마셔야 비로소 하루가 시작되는 느낌이라면 하루에도 몇 번씩 그윽한 커피 향이 생각난다면 마음속 우선순위에 언제나 커피가 있는 당신이라면 잊지 말고 챙겨야 할 단 하나의 리스트, 투썸플레이스 에이리스트.
                    </p>
                </div>    
            </div>
        </section>
    );
}

export default SectionPara;