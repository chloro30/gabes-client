import React from 'react';
import '../../scss/CompanyIntro.scss';

function CompanyIntro() {
    return (
        <section className='intro-con'>
            <div className='intro-container'>
                <div className='inner-con'>
                    <h2>Gabes Coffee</h2>
                    <div className='info-1st'>
                        <div className='top-txt'>
                            <p><span>Gabes Coffee</span>는 2002년,</p>
                            <p>
                                대한민국 커피의 대중화를 위해 설립되어 국내뿐만 아니라<br/>
                                해외까지 사업을 확장하며 가파르게 성장하고 있습니다.
                            </p>
                        </div>
                    </div>
                    <div className='info-2nd'>
                        <div className='img-area'></div>
                        <div className='info-area'>
                            <div className='info-area-title'>Original specialty coffee Brand, Gabes Coffee Provides the highest and the best Coffee culture</div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>회사명</th>
                                        <td>Gabes Coffee</td>
                                    </tr>
                                    <tr>
                                        <th>주소</th>
                                        <td>서울 종로구 세종대로 172 , 30층</td>
                                    </tr>
                                    <tr>
                                        <th>설립일</th>
                                        <td>2002년 5월 31일</td>
                                    </tr>
                                    <tr>
                                        <th>국내 매장수</th>
                                        <td>422개점 (직영 47개점, 가맹 375개점)</td>
                                    </tr>
                                    <tr>
                                        <th>해외 매장수</th>
                                        <td>9개국 91개점</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='info-3rd'>
                        <div className='info-3rd-txt'>
                            <p>커피를 함께하는 즐거움</p>
                            <div className='para'>
                                <p>
                                    커피는 혼자 즐길 때, 또는 사람들과 함께 할 때 각기 다른 즐거움을 줍니다.
                                    할리스에서는 친구, 연인, 가족과 함께 일상 속 즐거운 순간들을 만끽하셔도 좋고,
                                    가끔은 혼자만의 시간을 누리셔도 좋습니다.
                                    이를 위해 할리스는 편안하고 여유로운 공간에 그 이상의 가치를 담으려 다양한 노력을 하고 있습니다.
                                    <br/><br/>
                                    할리스는 강연 프로그램인 ‘School in HOLLYS’를 여는 등
                                    점차 문화와 예술의 공간으로 확장되고 있습니다.
                                    책을 가까이 즐길 수 있는 합정 북카페 매장,
                                    자연과 어우러져 이색적인 풍경을 즐길 수 있는
                                    부산 달맞이 매장과 경주 보불로 매장 등은
                                    새로운 공간으로의 변화를 시도하는 할리스의 열정과 의지를 보여줍니다.
                                </p>
                                <p>
                                    공간뿐만 아니라 커피와 어우러져 즐거움을 주는 요소로서 엄선된 재료로 만든 다양한 디저트 메뉴 또한 할리스의 자랑입니다.
                                    100% 국내산 고구마와 고흥 유자 등의 과일, 마다가스카르산 바닐라,
                                    스리랑카산 딤블라 홍차 등 커피와 어우러지는 디저트의 재료 역시 커피 원두만큼 깐깐하게 관리되기에 믿을 수 있습니다.
                                    <br/>
                                    이 디저트들은 개발단계에서부터 할리스의 음료와의 조화로움을 염두에 둔 덕분에 함께할 때 더욱 풍부한 맛을 즐기실 수 있습니다.
                                    <br/><br/>
                                    이처럼 할리스는 고객님께 최고의 즐거움과 특별함을 선사하기 위한 노력을 멈추지 않을 것입니다.
                                     특별함을 위한 작은 차이는 이러한 노력에서 비롯됩니다.
                                </p>
                            </div>
                        </div>
                        <div className='info-3rd-img-area'>
                            <div></div>
                            <div></div>
                            <div className='img-round'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyIntro;