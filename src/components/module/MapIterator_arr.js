import React from 'react';

function MapIterator_arr({products}) {
    return (
        <ul className='list-ul'>
            {
                products.map( (product) =>
                    <li key={product.id}>
                        <div className='img-div'>
                            <img className='img' src={`${product.src}`} alt={`${product.name}`} />
                        </div>
                        <p>{product.name}</p>
                    </li>
                )
            }
        </ul>
    );
}

export default MapIterator_arr;