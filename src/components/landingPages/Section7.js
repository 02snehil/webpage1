import React from "react";
import './Section7.css';
import section7_img1 from './images/section7_img1.png';
import section7_img2 from './images/section7_img2.png';
import section7_img3 from './images/section7_img3.png';
import section7_img4 from './images/section7_img4.png';
import section7_img5 from './images/section7_img5.png';
import section7_img6 from './images/section7_img6.png';
import section7_img1_1 from './images/section7_img1_1.png'
import section7_img2_1 from './images/section7_img2_1.png'
import section7_img3_1 from './images/section7_img3_1.png'
import section7_img4_1 from './images/section7_img4_1.png'
import section7_img5_1 from './images/section7_img5_1.png'
import section7_img6_1 from './images/section7_img6_1.png';

function Section7(){
    return(
        <>
             <div className="section7-container7">
                 <div className="container7-divisions">
                    <div className="container7-divisions-heading">
                        Learn from experts
                    </div>
                    <div className="container7-divisions-paragraph">
                       Our instructors come with extensive industry experience and help you learn the
                       fundamentals of product management in a cohort-learning environment.
                    </div>
                    <div className="container7-divisions-slider">
                        <div className="slider-wrapper">
                            <div className="slider">
                                <div className="container7-divisions-slider1">
                                    <img src={section7_img1} alt="section7_img1"  />
                                    <div className="container7-divisions-slider-name">Ajay Gupta</div>
                                    <div className="container7-divisions-slider-position">Project Manager</div>
                                    <div className="container7-divisions-slider-logo1">
                                        <img src={section7_img1_1} alt="section7_img1_1" />
                                    </div>
                                </div>
                                <div className="container7-divisions-slider2">
                                    <img src={section7_img2} alt="section7_img2" />
                                    <div className="container7-divisions-slider-name">Abhimanyu Raj</div>
                                    <div className="container7-divisions-slider-position">SDE-III</div>
                                    <div className="container7-divisions-slider-logo2">
                                        <img src={section7_img2_1} alt="section7_img2_1"  />
                                    </div>
                                </div>
                                <div className="container7-divisions-slider3">
                                    <img src={section7_img3} alt="section7_img3" />
                                    <div className="container7-divisions-slider-name">Saurab sahu</div>
                                    <div className="container7-divisions-slider-position">SDE I</div>
                                    <div className="container7-divisions-slider-logo3">
                                        <img src={section7_img3_1} alt="section7_img3_1" /> 
                                    </div>
                                </div> 
                                <div className="container7-divisions-slider4">
                                    <img src={section7_img4} alt="section7_img4" />
                                    <div className="container7-divisions-slider-name">Rishika Sharma</div>
                                    <div className="container7-divisions-slider-position">Data Scientist </div>
                                    <div className="container7-divisions-slider-logo4">
                                        <img src={section7_img4_1} alt="section7_img4_1" />
                                    </div>
                                </div>  
                                <div className="container7-divisions-slider5">
                                    <img src={section7_img5} alt="section7_img5" />   
                                    <div className="container7-divisions-slider-name">Abhinav Chhikara</div>
                                    <div className="container7-divisions-slider-position">SDE-II</div>
                                    <div className="container7-divisions-slider-logo5">
                                        <img src={section7_img5_1} alt="section7_img5_1" style={{marginLeft:'85px'}} />
                                    </div>
                                </div>
                                <div className="container7-divisions-slider6">
                                    <img src={section7_img6} alt="section7_img6" />
                                    <div className="container7-divisions-slider-name">Kshitiz Anand</div>
                                    <div className="container7-divisions-slider-position">Head of Design</div>
                                    <div className="container7-divisions-slider-logo6">
                                        <img src={section7_img6_1} alt="section7_img6_1" style={{marginLeft:'85px'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>            
        </>
    );
}
export default Section7;
