import React from "react";
import './Section12.css';
import section12_img1 from './images/section12_img1.png';
import section12_img2 from './images/section12_img2.png';
import section12_img3 from './images/section12_img3.png';
import section12_img4 from './images/section12_img4.png';
import section12_img5 from './images/section12_img5.png';
import section12_img6 from './images/section12_img6.png';
import section12_img7 from './images/section12_img7.png';

function Section12(){

    return(
        <>
            <div className="section12-container12">
                <div className="container12-divisions">
                    <div className="container12-divisions-bgimg">
                        <img src={section12_img1} alt="section12_img1" />
                    </div>
                    <div className="container12-divisions-content">
                        <div className="container12-divisions-content-heading">Is this program for you?</div>
                        <div className="container12-divisions-content-detail">
                           Whether you’re a beginner or an intermediate
                           professional seeking to upskill, transition, or
                           broaden your horizons in the field, our program
                           is designed to help you succeed.
                        </div>
                        <div className="container12-divisions-content-button1">
                            <button>Apply Now</button>
                        </div>
                        <div className="container12-divisions-content-button2">
                            <button>is this program right for me?</button>
                        </div>
                    </div>
                    <div className="container12-divisions-box">
                        <div className="container12-divisions-box-content1">
                            <div className="container12-divisions-box-content1-first">
                                <div className="container12-divisions-box-content1-first-icon">
                                    <img src={section12_img2}  alt="section12_img2" />
                                </div>
                                <div className="container12-divisions-box-content1-first-name">Early PMs</div>
                            </div>
                            <div className="container12-divisions-box-content1-second">
                               <div className="container12-divisions-box-content1-first-icon">
                                    <img src={section12_img3}  alt="section12_img2" />
                                </div>
                                <div className="container12-divisions-box-content1-first-name">Software Engineers</div>
                            </div>
                            <div className="container12-divisions-box-content1-third">
                               <div className="container12-divisions-box-content1-first-icon">
                                    <img src={section12_img4}  alt="section12_img4" />
                                </div>
                                <div className="container12-divisions-box-content1-first-name">Analyst</div>
                            </div>
                        </div>
                        <div className="container12-divisions-box-content2">
                            <div className="container12-divisions-box-content1-forth">
                                <div className="container12-divisions-box-content1-first-icon">
                                    <img src={section12_img5}  alt="section12_img5" />
                                </div>
                                <div className="container12-divisions-box-content1-first-name">QA Engineers</div>
                            </div>
                            <div className="container12-divisions-box-content1-fifth">
                               <div className="container12-divisions-box-content1-first-icon">
                                    <img src={section12_img6}  alt="section12_img6" />
                                </div>
                                <div className="container12-divisions-box-content1-first-name">Marketers</div>
                            </div>
                            <div className="container12-divisions-box-content1-sixth">
                               <div className="container12-divisions-box-content1-first-icon">
                                    <img src={section12_img7}  alt="section12_img7" />
                                </div>
                                <div className="container12-divisions-box-content1-first-name">Other Aspiring PMs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section12;