import React, {useState} from 'react';

import Tabs from './Tabs';

import './Home.css';
import Gallery from './Gallery';
import Slider from './Slider';


const Home = () => {
    const [isGalleryVisible, setIsGalleryVisible] = useState(true)
    const [isSliderVisible, setIsSliderVisible] = useState(false)

    const showGallery = (galleryVisibilityStatus) => {
        setIsGalleryVisible(galleryVisibilityStatus)
    } 

    const showSlider = (sliderVisibilityStatus) => {
        setIsSliderVisible(sliderVisibilityStatus)
    }

    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-2" style={{ paddingLeft: 0, paddingRight: 0, height: '100vh', position: 'sticky', overflowY: 'scroll', borderRight: 'groove', borderRightColor: 'black', borderRightWidth: '5px' }}>
                        <div className="accordion accordion-flush" id="sfw">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sfw-collapse" aria-expanded="false" aria-controls="sfw-collapse">
                                        SFW
                                    </button>
                                </h2>
                                <div id="sfw-collapse" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#sfw">
                                    <div className="accordion-body" style={{ padding: 0 }}>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item active">An item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                            <li className="list-group-item">A fourth item</li>
                                            <li className="list-group-item">And a fifth one</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-nsfw">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nsfw-collapse" aria-expanded="false" aria-controls="nsfw-collapse">
                                        NSFW
                                    </button>
                                </h2>
                                <div id="nsfw-collapse" className="accordion-collapse collapse" aria-labelledby="flush-nsfw" data-bs-parent="#nsfw">
                                    <div className="accordion-body" style={{ padding: 0 }}>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item active">An item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                            <li className="list-group-item">A fourth item</li>
                                            <li className="list-group-item">And a fifth one</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Tabs showGallery={showGallery} showSlider={showSlider} galleryActive={isGalleryVisible} sliderActive={isSliderVisible}/>
                        {isGalleryVisible && <Gallery />}
                        {isSliderVisible && <Slider/>}
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;