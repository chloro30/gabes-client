//Kakao Map Api

import React from 'react';
// import './Location.scss';

function Location() {

    const { kakao } = window;  //public/index.html에 붙여준 외부 <script> 를 받아서 Kakao 변수에 담음.
    
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    return (
        <div id="map" style={{width:500+'px',height:400+'px'}} ></div>
    );
}

export default Location;