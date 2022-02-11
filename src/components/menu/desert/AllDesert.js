import React from 'react';
import MapIterator from '../../module/MapIterator';

function AllDesert( {products, allMenuClick} ) {

    return (
        <div className='alldesert-container'>
            <div className='inner-con'>
                <h2>Desert</h2>
                <p>전체 메뉴</p>
                <div className='alldesert-list'>
                    {/* <MapIterator products={products} /> */}
                    <ul className='list-ul'>
                        { 
                            products.map( (product) =>
                                // <li key={product.code} onClick={allMenuClick}>
                                <li key={product.code} onClick={()=>allMenuClick(product)} >
                                    <a href={`#${product.category}`} key={product.code} >
                                        <div className='all-img-div'>
                                            <img className='all-img' src={`${product.src}`} alt={`${product.name}`} />
                                        </div>
                                        <p>{product.name}</p>
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AllDesert;