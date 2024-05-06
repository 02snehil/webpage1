import React from "react";
import './Section11.css';
import section11_img1 from './images/section11_img1.png';
import section11_img2 from './images/section11_img2.png';
import section11_img3 from './images/section11_img3.png';
import section11_img4 from './images/section11_img4.png';
import section11_img5 from './images/section11_img5.png';
import section11_img6 from './images/section11_img6.png';

function Section11(){

    return(
        <>
            <div className="section11-container11">
                <div className="container11-divisions">
                    <div className="container11-divisions-line"></div>
                    <div className="container11-divisions-heading">
                        GET INTERVIEW READY
                    </div>
                    <div className="container11-divisions-subheading">
                       Weekly interview preparation
                    </div>
                    <div className="container11-divisions-box1">
                        <div className="container11-divisions-box1-1">
                           <div className="container11-divisions-box1-1-heading">
                               <div className="container11-divisions-box1-1-heading-icon">
                                   <img src={section11_img1} alt="section11_img1.png" />
                               </div>
                               <div className="container11-divisions-box1-1-heading-name">Execution</div>
                           </div>
                           <div className="container11-divisions-box1-1-details">
                              Test your ability to handle ambiguity and issues and diagnose them.
                           </div>
                        </div>
                        <div className="container11-divisions-box1-1">
                           <div className="container11-divisions-box1-1-heading">
                               <div className="container11-divisions-box1-1-heading-icon">
                                   <img src={section11_img2} alt="section11_img2.png" />
                               </div>
                               <div className="container11-divisions-box1-1-heading-name">Product design</div>
                           </div>
                           <div className="container11-divisions-box1-1-details">
                             Learn to find creative solutions to difficult or unusual problems.
                           </div>
                        </div>
                        <div className="container11-divisions-box1-1">
                           <div className="container11-divisions-box1-1-heading">
                               <div className="container11-divisions-box1-1-heading-icon">
                                   <img src={section11_img3} alt="section11_img3.png" />
                               </div>
                               <div className="container11-divisions-box1-1-heading-name">Product Sense</div>
                           </div>
                           <div className="container11-divisions-box1-1-details">
                              Assess your ability to reason about competitive landscapes and high-level product decisions.
                           </div>
                        </div>
                    </div>



                    <div className="container11-divisions-box2">
                        <div className="container11-divisions-box1-1">
                           <div className="container11-divisions-box1-1-heading">
                               <div className="container11-divisions-box1-1-heading-icon">
                                   <img src={section11_img4} alt="section11_img4.png" />
                               </div>
                               <div className="container11-divisions-box1-1-heading-name">Analytical</div>
                           </div>
                           <div className="container11-divisions-box1-1-details">
                           Test your analytical reasoning and ability to frame issues in terms of concrete metrics.
                           </div>
                        </div>
                        <div className="container11-divisions-box1-1">
                           <div className="container11-divisions-box1-1-heading">
                               <div className="container11-divisions-box1-1-heading-icon">
                                   <img src={section11_img5} alt="section11_img5.png" />
                               </div>
                               <div className="container11-divisions-box1-1-heading-name">Guesstimate</div>
                           </div>
                           <div className="container11-divisions-box1-1-details">
                              Sharpen your analytical skills and learn to logically arrive at close answers.
                           </div>
                        </div>
                        <div className="container11-divisions-box1-1">
                           <div className="container11-divisions-box1-1-heading">
                               <div className="container11-divisions-box1-1-heading-icon">
                                   <img src={section11_img6} alt="section11_img6.png" />
                               </div>
                               <div className="container11-divisions-box1-1-heading-name">Behavioural</div>
                           </div>
                           <div className="container11-divisions-box1-1-details">
                              Ace the experiential and hypothetical scenario questions typical of PM interviews.
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section11;
// /landing/productmanagement
// /landing/productmanagement/