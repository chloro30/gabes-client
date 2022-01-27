import React from 'react';

function SliderContent({activeIndex, imageSlider}) {
    return (
        <section>
            <div className="slide-div">
                {
                    imageSlider.map((slide,index) => (
                        <div
                            key={index}
                            className={(index===activeIndex) ? "slides active" : "inactive"}
                        >
                            <img className='slide-image' src={slide.url} alt={`이미지${index}`} />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default SliderContent;