import React from 'react';

function MapIterator_arr( {products, changeItem} ) {
    return (
        <ul className='list-ul'>
            {
                products.map( (product) =>
                    <li key={product.id}>
                        <div className='img-div'>
                            <img className='img-item' src={`${product.src}`} alt={`${product.name}`} onClick={()=>changeItem(product)}/>
                        </div>
                        <p>{product.name}</p>
                    </li>
                )
            }
        </ul>
    );
}

export default MapIterator_arr;