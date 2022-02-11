import React from 'react';

function ProductIntro( {item} ) {

    return (
        <div className='intro-div'>
            <div className='intro-img'>
                <img src={item.src} alt="초기_이미지" />
            </div>
            <div className='intro-desc'>
                <table className='nutrition'>
                    <thead>
                        <tr>
                            <th>제공량<span>(g)</span></th>
                            <th>열량<span>(kcal)</span></th>
                            <th>당류<span>(g)</span></th>
                            <th>단백질<span>(g)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.capacity}</td>
                            <td>{item.calorie}</td>
                            <td>{item.sugar}</td>
                            <td>{item.protein}</td>
                        </tr>
                    </tbody>
                </table>
                <table className='nutrition'>
                    <thead>
                        <tr>
                            <th>나트륨<span>(g)</span></th>
                            <th>포화지방<span>(mg)</span></th>
                            <th>카페인<span>(mg)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.natrium}</td>
                            <td>{item.fatty}</td>
                            <td>{item.caffeine}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductIntro;