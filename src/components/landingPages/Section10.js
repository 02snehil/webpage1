import React from "react";
import './Section10.css';
import section10_img1 from './images/section10_img1.png';
import section10_img2 from './images/section10_img2.png';
import section10_img3 from './images/section10_img3.png';

function Section10(){

    return(
        <>
            <div className="section10-container10">
                <div className="container10-divisions">
                    <div className="container10-divisions-line"></div>
                    <div className="container10-divisions-heading">
                       CREATE A COMPELLING PORTFOLIO
                    </div>
                    <div className="container10-divisions-subheading">
                    Work on real world projects to apply your learnings
                    </div>
                    <div className="container10-divisions-pictures">
                        <div className="container10-divisions-pictures-1">
                            <img src={section10_img1} alt="section10_img1"  />
                        </div>
                        <div className="container10-divisions-pictures-2">
                            <img src={section10_img2} alt="section10_img2"  />
                        </div>
                        <div className="container10-divisions-pictures-3">
                           <img src={section10_img3} alt="section10_img3"  />
                        </div>
                    </div>
                    <div className="container10-divisions-button">
                        <button>Download sample brief</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section10;

