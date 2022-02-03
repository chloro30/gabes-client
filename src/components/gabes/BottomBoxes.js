import React from 'react';
import { Link } from 'react-router-dom';

function BottomBoxes() {


    return (
        <div className='boxes inner-con'>
            <div className='box-left'>
                <div className='span-div'>
                    <span>About</span>
                </div>
                <h2>Gabes 소개</h2>
                <p>Gabes Coffee를 소개해드립니다.</p>
                <Link to="/about/intro">자세히 보기</Link>
            </div>
            <div className='box-center'>
                <div className='span-div'>
                    <span>History</span>
                </div>
                <h2>Gabes History</h2>
                <p>Gabes Coffee의 역사를 알려드립니다.</p>
                <Link to="/about/history">자세히 보기</Link>
            </div>
            <div className='box-right'>
                <div className='span-div'>
                    <span>Franchise</span>
                </div>
                <h2>가맹점 문의</h2>
                <p>
                    성공하는 커피전문점 창업,<br/>
                    Gabes Coffee가 도와드리겠습니다.
                </p>
                <Link to="#">자세히 보기</Link>
            </div>
        </div>
    );
}

export default BottomBoxes;