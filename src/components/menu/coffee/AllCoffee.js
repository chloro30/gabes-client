import React from 'react';
import MapIterator from '../../module/MapIterator';

function AllCoffee( {allProducts} ) {

    return (
        <div className='allcoffee-container'>
            <div className='inner-con'>
                <p>coffee</p>
                <div className='allcoffee-list'>
                    <MapIterator allProducts={allProducts} />
                </div>
            </div>
        </div>
    );
}

export default AllCoffee;