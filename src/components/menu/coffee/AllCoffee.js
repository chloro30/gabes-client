import React from 'react';
// import MapIterator from '../../module/MapIterator';

function AllCoffee( {products, allMenuClick} ) {
    
    return (
        <div className='allcoffee-container'>
            <div className='inner-con'>
                <h2>Coffee</h2>
                <p>전체 메뉴</p>
                <div className='allcoffee-list'>
                    {/* <MapIterator products={products} /> */}
                    <ul className='list-ul'>
                        { 
                            products.map( (product) =>
                                // <li key={product.code} onClick={allMenuClick}>
                                <li key={product.code} onClick={()=>allMenuClick(product)} >
                                    <div className='all-img-div'>
                                        <img className='all-img' src={`${product.src}`} alt={`${product.name}`} />
                                    </div>
                                    <p>{product.name}</p>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AllCoffee;