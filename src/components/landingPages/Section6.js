import React from "react";
import './Section6.css';
import section6_img1 from './images/section6_img1.png';
import section6_img2 from './images/section6_img2.png';
import section6_img3 from './images/section6_img3.png';
import section6_img4 from './images/section6_img4.png';



function Section6(){

    return(
        <>
           <div className="section6-container6">
               <div className="container6-div1">
                   <div className="container6-dotted-wave">
                      <img src={section6_img1} alt="section6_img1" className="section6_img1" />
                      <img src={section6_img2} alt="section6_img2" className="section6_img2" />
                   </div>
                   <div className="container6-heading">
                      Master essential product management tools
                   </div>
                   <div className="container6-details">
                      Gain hands-on experience with the tools used by professional product
                      managers to drive success and deliver value in the real world.
                   </div>
                   <div className="container6-image">
                       <img src={section6_img3} alt="section6_img3" />
                   </div>
               </div>
               <div className="container6-div2">
                   <div className="container6-div2-heading">
                       AI for PMs
                   </div>
                   <div className="container6-div2-details-and-image">
                       <div className="container6-div2-details">
                           Learn how to effectively use AI tools including ChatGPT, Claude, and Midjourney to
                           assist you in your daily PM tasks, freeing up to 15 hours each week. These tools can
                           assist you in a variety of essential tasks such as conducting thorough market research,
                           developing insightful user research interview questions, composing detailed PRDs, and
                           selecting the appropriate metrics.
                       </div>
                       <div className="container6-div2-image">
                           <img src={section6_img4} alt="section6_img4" />
                       </div>
                    </div> 
               </div>
            </div>   
        </>
    );
}
export default Section6;