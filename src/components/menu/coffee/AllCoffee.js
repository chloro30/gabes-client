import React from 'react';
import MapIterator from '../../module/MapIterator';

function AllCoffee( {products} ) {

    return (
        <div className='allcoffee-container'>
            <div className='inner-con'>
                <h2>Coffee</h2>
                <div className='allcoffee-list'>
                    <MapIterator products={products} />
                </div>
            </div>
        </div>
    );
}

export default AllCoffee;