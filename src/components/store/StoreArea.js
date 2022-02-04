import React from 'react';
import '../scss/StoreArea.scss';
import FindStore from './FindStore';

function StoreArea() {
    return (
        <section className='store-con'>
            <div className='store-container'>
                <div className='inner-con'>
                    <h2>매장 찾기</h2>
                    <FindStore />
                </div>
            </div>
        </section>
    );
}

export default StoreArea;