import React from 'react';

const Tabs = ({showGallery,showSlider, galleryActive, sliderActive}) => {


    const handelGallery = () => {
        showGallery(true)
        showSlider(false)
    }
    
    const handelSlider = () => {
        showGallery(false)
        showSlider(true)
    }

    return (
        <React.Fragment>
            <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                    <a className={galleryActive ? "nav-link active" : "nav-link"} type='button' href="##" onClick={handelGallery}>Gallery</a>
                </li>
                <li className="nav-item">
                    <a className={sliderActive ? "nav-link active" : "nav-link"} type='button' href="##" onClick={handelSlider}>Slider</a>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Tabs;