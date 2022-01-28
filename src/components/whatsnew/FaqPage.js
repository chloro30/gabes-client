import React from 'react';
import Details from '../module/details/Details';
import '../scss/FaqPage.scss';

function FaqPage() {
    return (
        <section className='faq-con'>
            <div className='faq-container'>
                <div className='inner-con'>
                    <Details />
                </div>
            </div>
        </section>
    );
}

export default FaqPage;