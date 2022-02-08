import React, { useEffect } from 'react';
import './Location.scss';

function Location() {

    /*
        카카오 맵 API : https://apis.map.kakao.com/web/documentation/

        지도
            사용)
                지도 생성하기 : https://apis.map.kakao.com/web/sample/basicMap/
                지도에 컨트롤 올리기: https://apis.map.kakao.com/web/sample/addMapControl/  (지도 타입 전환)
                클릭한 위치에 마커 표시하기 : https://apis.map.kakao.com/web/sample/addMapClickEventWithMarker/  (원하는 위치의 위/경도 얻기)
                지도 레벨 바꾸기 : https://apis.map.kakao.com/web/sample/changeLevel/
                지도 이동시키기 : https://apis.map.kakao.com/web/sample/moveMap/

            미사용)
                지도 정보 얻기 : https://apis.map.kakao.com/web/sample/mapInfo/  (중심 위/경도,레벨,타입,남서쪽 좌표,북동쪽 좌표)
                지도에 로드뷰 도로 표시하기 : https://apis.map.kakao.com/web/sample/addRoadviewOverlay/
                지도 범위 재설정 하기 : https://apis.map.kakao.com/web/sample/setBounds/
                클릭 이벤트 등록하기 : https://apis.map.kakao.com/web/sample/addMapClickEvent/
                확대, 축소 이벤트 등록하기 : https://apis.map.kakao.com/web/sample/addMapZoomChangedEvent/
                중심좌표 변경 이벤트 등록하기 : https://apis.map.kakao.com/web/sample/addMapCenterChangedEvent/

        오버레이
            사용)
                여러개 마커 표시하기 : https://apis.map.kakao.com/web/sample/multipleMarkerImage/
                마커에 클릭 이벤트 등록하기 : https://apis.map.kakao.com/web/sample/addMarkerClickEvent/
                닫기가 가능한 커스텀 오버레이 : https://apis.map.kakao.com/web/sample/removableCustomOverlay/
                
            미사용)
                마커 생성하기 : https://apis.map.kakao.com/web/sample/basicMarker/
                다른 이미지로 마커 생성하기 : https://apis.map.kakao.com/web/sample/basicMarkerImage/
                마커에 인포윈도우 표시하기 : https://apis.map.kakao.com/web/sample/markerWithInfoWindow/
                여러개 마커에 이벤트 등록하기2 : https://apis.map.kakao.com/web/sample/multipleMarkerEvent2/
                이미지 마커와 커스텀 오버레이 : https://apis.map.kakao.com/web/sample/markerWithCustomOverlay/

        라이브러리
            사용)

            미사용)
                주소로 장소 표시하기 : https://apis.map.kakao.com/web/sample/addr2coord/
                키워드로 장소검색하고 목록으로 표출하기 : https://apis.map.kakao.com/web/sample/keywordList/



    */

    const { kakao } = window;

    useEffect( () => {
    
    /* 지도 생성 - 시작 */
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
            center: new kakao.maps.LatLng(37.571808778125124, 126.97766742756818), //지도의 중심좌표. (위도(남북), 경도(동서))
            level: 3 //지도의 레벨(확대, 축소 정도 (범위: 1~14))
        };

        let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    /* 지도 생성 - 끝 */

        
    /* 지도에 컨트롤 생성 - 시작 */
        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도 위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    /* 지도에 컨트롤 생성 - 끝 */
        
        
    /*  목록으로 표출하기 */
        // 마커를 담을 배열입니다
        let markers = [];
        
        let places = [
            {
                x:126.97766742756818,
                y:37.571808778125124,
                place_name:"서울 세종대로점",
                address_name:"서울 종로구 광화문 광장",
                road_address_name:"서울 종로구 세종대로 172",
                phone:"02-1234-5678",
            },
            {
                x:127.38736030722067,
                y:36.37598661823893,
                place_name:"대전 엑스포점",
                address_name:"대전 유성구 도룡동",
                road_address_name:"대전 유성구 대덕대로 512번길",
                phone:"042-244-5678",
            },
            {
                x:128.5938231955025,
                y:35.86734885986554,
                place_name:"대구 동성로점",
                address_name:"대구 중구 동성로2가",
                road_address_name:"대구 중구 동성로 234번길",
                phone:"053-848-5678",
            },
            {
                x:129.0599921205105,
                y:35.15482550587955,
                place_name:"부산 서면점",
                address_name:"부산 부산진구 부전동",
                road_address_name:"부산 부산진구 중앙대로 1",
                phone:"051-546-5678",
            },
            {
                x:126.79160698169308,
                y:35.13676076729185,
                place_name:"광주 송정역점",
                address_name:"광주 광산구 송정동",
                road_address_name:"광주 광산구 상무대로 201",
                phone:"062-234-9578",
            },
            {
                x:129.29405378717297,
                y:35.532665062645044,
                place_name:"울산 대공원점",
                address_name:"울산 남구 옥동",
                road_address_name:"울산 남구 대공원로 94",
                phone:"052-234-5078",
            },
            {
                x:128.91030604981364,
                y:37.79443254248677,
                place_name:"강릉 경포호수점",
                address_name:"강원 강릉시 초당동",
                road_address_name:"강원 강릉시 난설헌로193번길",
                phone:"033-944-4677",
            },
            {
                x:126.49235128359848,
                y:33.5059971426395,
                place_name:"제주 공항점",
                address_name:"제주시 용담이동 2002",
                road_address_name:"제주시 공항로 2 제주국제공항",
                phone:"064-344-5678",
            }
        ];
        // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({zIndex:1});
        

        displayPlaces(places);
        console.log(markers);


        // 검색 결과 목록과 마커를 표출하는 함수입니다
        function displayPlaces(places) {
        
            const listEl = document.getElementById('placesList'), 
            menuEl = document.getElementById('menu_wrap'),
            fragment = document.createDocumentFragment(), 
            bounds = new kakao.maps.LatLngBounds(), 
            listStr = '';
            
            for ( let i=0; i<places.length; i++ ) {
        
                // 마커를 생성하고 지도에 표시합니다
                let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                    marker = addMarker(placePosition, i), 
                    itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                bounds.extend(placePosition);
        
                // 마커와 검색결과 항목에 mouseover 했을때
                // 해당 장소에 인포윈도우에 장소명을 표시합니다
                // mouseout 했을 때는 인포윈도우를 닫습니다
                (function(marker, title) {
                    kakao.maps.event.addListener(marker, 'mouseover', function() {
                        displayInfowindow(marker, title);
                    });
        
                    kakao.maps.event.addListener(marker, 'mouseout', function() {
                        // infowindow.close();
                    });

                    kakao.maps.event.addListener(marker, 'click', function() {
                        // console.log(places[i].road_address_name);
                        // alert(places[i].road_address_name);
                        
                        
                        //지도 레벨 내리기 (줌 확대)
                        map.setLevel(3);

                        // 이동할 위도 경도 위치를 생성합니다 
                        let moveLatLon = new kakao.maps.LatLng(places[i].y, places[i].x);
                        
                        // 지도 중심을 '한번에' 이동 시킵니다 
                        // map.setCenter(moveLatLon);
                        
                        // 지도 중심을 '부드럽게' 이동시킵니다
                        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
                        map.panTo(moveLatLon);


                    });
        
                    itemEl.onmouseenter =  function () {
                        displayInfowindow(marker, title);
                        console.log(marker);
                    };
        
                    itemEl.onmouseleave =  function () {
                        // infowindow.close();
                        // console.log('mouse out');
                    };
                    itemEl.onclick =  function () {
                        //지도 레벨 내리기 (줌 확대)
                        map.setLevel(3);
                        
                        // 이동할 위도 경도 위치를 생성합니다 
                        let moveLatLon = new kakao.maps.LatLng(places[i].y, places[i].x);
                        
                        // 지도 중심을 '한번에' 이동 시킵니다 
                        // map.setCenter(moveLatLon);
                        
                        // 지도 중심을 '부드럽게' 이동시킵니다
                        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
                        map.panTo(moveLatLon);
                    };
                })(marker, places[i].place_name);
        
                fragment.appendChild(itemEl);




                // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
                // 인포윈도우에 장소명을 표시합니다
                function displayInfowindow(marker, title) {
                    let content = `
                        <div class="wrap-k">
                            <div class="info-k">  
                                <div class="title">
                                    ${places[i].place_name}
                                    <div class="close" title="닫기"></div>
                                </div>
                                <div class="body"> 
                                    <div class="img">
                                        <img src="img/store/star_logo.png" width="73" height="70">
                                    </div>
                                    <div class="desc">
                                        <div class="ellipsis">${places[i].road_address_name}</div> 
                                        <div class="jibun ellipsis">${places[i].address_name}</div>
                                        <div class="jibun ellipsis">${places[i].phone}</div>
                                        <div class="link"><a href="https://www.starbucks.co.kr" target="_blank" class="link">홈페이지</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                
                    infowindow.setContent(content);
                    infowindow.open(map, marker);

            
                }

                // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
                listEl.appendChild(fragment);
                menuEl.scrollTop = 0;
            
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);

            }// for문 끝


        
            // 검색결과 항목을 Element로 반환하는 함수입니다
            function getListItem(index, places) {
            
                let el = document.createElement('li'),
                itemStr = '<span class="markerbg"></span>' +
                            '<div class="info">' +
                            '   <h3>' + places.place_name + '</h3>';
            
                if (places.road_address_name) {
                    itemStr += '    <span class="road">' + places.road_address_name + '</span>' +
                                '   <span class="jibun">' +  places.address_name  + '</span>';
                } else {
                    itemStr += '    <span>' +  places.address_name  + '</span>'; 
                }
                            
                itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                            '</div>';           
            
                el.innerHTML = itemStr;
                el.className = 'item';
            
                return el;
            }

        
            // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
            function addMarker(position, idx, title) {
                let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                    imageSize = new kakao.maps.Size(30, 38),  // 마커 이미지의 크기
                    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize),
                    marker = new kakao.maps.Marker({
                        position: position, // 마커의 위치
                        image: markerImage 
                    });
            
                marker.setMap(map); // 지도 위에 마커를 표출합니다
                markers.push(marker);  // 배열에 생성된 마커를 추가합니다
            
                return marker;
            }
        
        
        } //displayPlaces() 끝
        

    }, []);



    return (
        <section className='location-con'>
            <div id="map"></div>
            <div id="menu_wrap" className="bg_white">
                <ul id="placesList"></ul>
            </div>
        </section>
    );
}

export default Location;