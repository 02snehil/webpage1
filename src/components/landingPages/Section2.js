import React from "react";
import { useState } from "react";
import './Section2.css';
import section2_image1 from './images/section2_image1.png';
import section2_image2 from './images/section2_image2.png';
import section2_image3 from './images/section2_image3.png';
import section2_image4 from './images/section2_image4.png';

function Section2(){

    const videoLink ="https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/phoenix/Product-Management/PML%2004%20(1).mp4";

    // State to track whether the video is playing or not
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to toggle video play state
    const toggleVideo = () => {
      setIsPlaying(!isPlaying);
    };


    return(
      <>
       <div className="section2-container2">
          <div className="section2-images">
            <img src={section2_image1} alt="section2_image1" />
          </div>
          <div className="section2-heading">
            <p>Become an exceptional <br/>Product Manager</p>
          </div>
          <div className="section2-paragraph">
            <p>Master the art of product management and solve real-world problems. <br />
              Learn essential skills, build a strong product portfolio, and crack your <br />
              next PM interview.
            </p>
          </div>
          <div className="section2-applynow-button">
            <a href="/apply-now"><button>Apply Now</button></a>
          </div>
          <div className="section2-video">
            {isPlaying ? (      
              <video controls autoPlay>
               <source src={ videoLink } type="video/mp4" />
              </video>
              ) : (
              <img src={section2_image2} alt="section2_image2" 
                onClick={toggleVideo} />
            )} 
          </div>------
          <div className="section2-inside-divisions">
            <div className="section2-inside-division-text">
              <div className="section2-text-row1">
                IN 16-WEEKS
              </div>
              <div className="section2-text-row2">
                Fast track your way to product management
              </div>
              <div className="section2-text-row3">
                Build a solid product portfolio by fine-tuning your product thinking skills and
                learning proven frameworks.
              </div>
            </div>
            <div className="section2-inside-division-divisions">
              <div className="section2-divisions-division1">
                <div className="section2-division1-text">
                  ENROLLMENT ENDS
                </div>
                <div className="section2-division1-date">
                  22 <span style={{fontSize:'30px'}}>May</span>
                </div>
              </div>
              <div className="section2-divisions-division2">
                <div className="section2-division2-div1">
                  <div className="section2-division2-div1-number">
                    15<div className="plus-icon">+</div>
                  </div>
                  <div className="section2-division2-div1-text">
                    <div className="section2-div1-text-img">
                      <img src={section2_image3} alt="section2_image3" />
                    </div>
                    &nbsp;EXPERTS
                  </div>
                </div>
                <div className="section2-division2-div2">
                  <div className="section2-division2-div2-number">
                    25<div className="plus-icon">+</div>
                  </div>
                  <div className="section2-division2-div2-text">
                    <div className="section2-div2-text-img">
                      <img src={section2_image4} alt="section2_image4" />
                    </div>
                    &nbsp;LIVE SESSIONS
                  </div>
                </div>
              </div>
            </div> 
          </div>
       </div>
      </>
    );
}
export default Section2;