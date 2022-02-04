import React from 'react';
import Details from '../module/details/Details';
import '../scss/FaqPage.scss';

function FaqPage() {
    return (
        <section className='faq-con'>
            <div className='faq-container'>
                <div className='inner-con'>
                    <h2>FAQ</h2>
                    <Details />
                </div>
            </div>
        </section>
    );
}

export default FaqPage;