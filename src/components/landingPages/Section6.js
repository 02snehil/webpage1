import React from "react";
import './Section6.css';
import section6_img1 from './images/section6_img1.png';
import section6_img2 from './images/section6_img2.png';
import section6_img3 from './images/section6_img3.png';
import section6_img3_1 from './images/section6_img3_1.png';
import section6_img3_2 from './images/section6_img3_2.png';
import section6_img3_3 from './images/section6_img3_3.png';
import section6_img4 from './images/section6_img4.png';

function Section6() {
    return (
        <div className="section6-container6">
            <div className="container6-div1">
                {/* Show the dotted wave images only for larger screens */}
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
                {/* Show the first image only for smaller screens */}
                <div className="container6-image-smaller">
                    <img src={section6_img3_1} alt="section6_img3_1"  className="img-smaller-screen" />
                    <img src={section6_img3_2} alt="section6_img3_2"  className="img-smaller-screen" />
                    <img src={section6_img3_3} alt="section6_img3_3"  className="img-smaller-screen3" />
                </div>    
                    {/* Show additional images only for larger screens */}
                <div className="container6-image">    
                    <img src={section6_img3} alt="section6_img3"className="img-big-screen" />
                </div>
            </div>
            {/* Show the second section for both larger and smaller screens */}
            <div className="container6-div2">
                <div className="container6-div2-image">
                    {/* Move the image to the top */}
                    <img src={section6_img4} alt="section6_img4" />
                </div>
                <div className="container6-div2-details">
                    <span>AI for PMs</span> <br/><br/>
                      Discover how to optimize your workflow with AI tools 
                      like ChatGPT, Claude, and Midjourney to streamline your 
                      daily project management tasks, potentially reclaiming up 
                      to 15 hours weekly. Leverage these powerful utilities for 
                      comprehensive market analysis, crafting probing user research 
                      interview inquiries, drafting intricate PRDs, and pinpointing 
                      relevant metrics with precision.
                </div>
                <div className="container6-div2-image2">
                    {/* Move the image to the top */}
                    <img src={section6_img4} alt="section6_img4" />
                </div>
            </div>
        </div>
    );
}

export default Section6;
