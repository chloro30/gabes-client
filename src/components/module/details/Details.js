import React from 'react';
import './Details.scss';

function Details() {
    return (
        <div className='details-div'>
            <details>
                <summary>원두는 무엇을 사용하나요?</summary>
                <div className='summary-con'>
                    <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </p>
                    <img src='../img/faq/wondu.jpg' alt='원두사진' />
                </div>
            </details>
            <details>
                <summary>멤버십 혜택이 있나요?</summary>
                <div className='summary-con'>
                    <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </p>
                    <ul>
                        <li>리스트1</li>
                        <li>리스트2</li>
                        <li>리스트3</li>
                        <li>리스트4</li>
                    </ul>
                </div>
            </details>
            <details>
                <summary>영업시간은 어떻게 되나요?</summary>
                <div className='summary-con'>
                    <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </p>
                </div>
            </details>
            <details>
                <summary>가맹 절차는 어떻게 되나요?</summary>
                <div className='summary-con'>
                    <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </p>
                </div>
            </details>
        </div>
    );
}

export default Details;
