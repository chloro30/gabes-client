import React from 'react';

function MapIterator( {allProducts} ) {

    const keys = Object.keys(allProducts.coffee);
    const allProducts_arr = [...allProducts.coffee[keys[0]], ...allProducts.coffee[keys[1]]];
    // console.log(allProducts_arr);
    // console.log(allProducts_arr[0].src);
    return (
        <ul>
            { allProducts_arr.map( (product) =>
                <li key={product.code}>
                    <div className='all-img-div'>
                        <img className='all-img' src={`${product.src}`} alt={`${product.name}`} />
                    </div>
                    <p>{product.name}</p>
                </li>
              )
            }
        </ul>
    );
}

export default MapIterator;