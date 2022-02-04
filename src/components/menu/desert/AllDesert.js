import React from 'react';
import MapIterator from '../../module/MapIterator';

function Desert( {products} ) {

    return (
        <div className='alldesert-container'>
            <div className='inner-con'>
                <h2>Desert</h2>
                <div className='alldesert-list'>
                    <MapIterator products={products} />
                </div>
            </div>
        </div>
    );
}

export default Desert;