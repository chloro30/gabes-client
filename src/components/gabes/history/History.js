import React from 'react';
import ScrollToTop from '../../module/scroll/ScrollToTop';
import '../../scss/History.scss';
import BottomBoxes from '../BottomBoxes';

function History() {
    return (
        <section className='history-con'>
            <ScrollToTop />
            <div className='history-container'>
                <h2 className='inner-con'>History Of Gabes</h2>
                <div className='history-01-bg'>
                    <div className='history-01 inner-con'>
                        <p>
                            1883년 에스프레소의 고향 이탈리아,<br/>
                            커피에 대한 열정이 넘치는 파스쿠찌 부자에 의해 카페 파스쿠찌의 역사가 시작되었습니다.
                        </p>
                        <dl>
                            <dt>
                                SINCE 1883<br/>
                                안토니오 파스쿠찌의 생두에 대한 관심
                            </dt>
                            <dd>
                                19세기 말, 이탈리아와 영국 두 나라 사이에서 무역을 하던 안토니오 파스쿠찌는
                                거래하는 품목 중, 생두에 큰 관심을 가지게 되었습니다.
                                그리고 이를 발전 시키고자 합니다.
                                안토니오 파스쿠찌의 생두에 대한 관심을 시작으로 카페 파스쿠찌의 역사가 시작되었습니다.
                            </dd>
                            <dt>
                                1935년 몬테체리뇨네를 거점으로<br/>
                                이들만의 커피를 만들기 시작
                            </dt>
                            <dd>
                                안토니오 파스쿠찌의 아들인 마리오 파스쿠찌가 그의 아내 도메니카와 함께 몬테체리뇨네(리미니와 페사로 중간 언덕에 있는 작은 도시)에서 
                                원두를 주석냄비에 볶아 새로운 맛과 향을 만드는실험에 성공 합니다. 
                                그리고 카페 파스쿠찌의 사업을 본격적으로 전개하게 됩니다.
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className='history-02-bg'>
                    <div className='history-02 inner-con'>
                        <p>
                            1946년 파스쿠찌는 장비를 이용하여 에스프레소를 추출하는 기법을 최초로 도입,<br/>
                            새로운 로스팅 기계 도입과 생산라인 구축으로 많은 양의 고품질 원두를 생산할 수 있는 환경을 갖추게 됩니다.
                        </p>
                        <dl>
                            <dt>
                                1946년,<br/>
                                업계 최초로 장비를 이용한 에스프레소 추출법 도입
                            </dt>
                            <dd>
                                1946년 마리오 파스쿠찌의 동생 디노 파스쿠찌가 에스프레소 머신을 도입하여 장비를 이용한 에스프레소 추출법을 업계 최초로 도입하였습니다.
                            </dd>
                            <dt>
                                1950년대,<br/>
                                이들만의 커피를 만들기 시작
                            </dt>
                            <dd>
                                파스쿠찌家의 3대인 알베르토 파스쿠찌는 로스팅 과정을 산업화하기로 결심하였고 첫번째 생산 공장을 설치하였습니다.
                            </dd>
                            <dt>
                                1963년,<br/>
                                이들만의 커피를 만들기 시작
                            </dt>
                            <dd>
                                균일한 로스팅을 위한 로스팅 기계 도입과 생산 라인을 구축함으로써 원두의 생산량 확대 및 고품질 원두생산이 가능한 환경을 마련했습니다. 그래서 대량 생산이 가능해졌고 이 트럭을 활용해서 원두를 배달하기 시작했습니다.
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className='history-03-bg'>
                    <div className='history-03 inner-con'>
                        <p>
                            그후 130년간 계속 이어진 파스쿠찌家의 노력은<br/>
                            이탈리아 정통 커피와 그 문화를 세계로 전파하였고,<br/>
                            현재 이탈리아, 영국, 미국 등 전 세계 20여 개국 40여 도시에 진출한 글로벌 브랜드로 성장했습니다.
                        </p>
                        <div>
                            <p>
                                파스쿠찌는 이탈리아에서 처음으로 다양한 원두를 블렌딩한 것으로 유명합니다.<br/>
                                파스쿠찌의 원두는 최고의 기후조건을 갖춘 각국의 재배지에서 재배된 원두를 가지고<br/>
                                파스쿠찌만의 독자적인 배합비율로 블렌딩 과정을 거칩니다.
                            </p>
                            <p>
                                “Only Top-Quality Coffee”를 목표로<br/>
                                총 7가지 타입의 품종을 배합하여 좋은 원두를 생산하고 있습니다.
                            </p>
                            <p>
                                파스쿠찌의 노력은 이탈리아 전통 커피 브랜드로<br/>
                                보다 이탈리아 본래 모습에 충실한 정통 에스프레소 전문점으로<br/>
                                <span>20여개 국, 40개 도시</span>에 진출하게 됩니다.<br/>
                            </p>
                        </div>
                    </div>
                </div>
                <BottomBoxes />
            </div>
        </section>
    );
}

export default History;