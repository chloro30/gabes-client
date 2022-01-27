import React from 'react';

function MapIterator( {products} ) {
    return (
        <ul className='list-ul'>
            { 
                products.map( (product) =>
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