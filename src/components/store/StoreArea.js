import React from 'react';
import '../scss/FindStore.scss';
import FindStore from './FindStore';

function StoreArea() {
    return (
        <section className='store-con'>
            <div className='store-container'>
                <div className='inner-con'>
                    <FindStore />
                </div>
            </div>
        </section>
    );
}

export default StoreArea;