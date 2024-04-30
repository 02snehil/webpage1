import React from "react";
import './Section3.css';
import section3_img1 from './images/section3_img1.png';
// import section3_img2 from './images/section3_img2.png';
// import section3_img3 from './images/section3_img3.png';
// import section3_img4 from './images/section3_img4.png';
// import section3_img5 from './images/section3_img5.png';

function Section3(){

    return(
        <>
           <div className="section3-container3">
               <div className="container3-divisions3">
                   <div className="divisions3-heading">
                       The Program at a Glance
                   </div>
                   <div className="divisions3-boxes-and-images">
                       <div className="divisions3-boxes">
                           <div className="divisions3-boxes-box1"> Orientation</div>
                           <div className="divisions3-boxes-box2">Live classes & weekly assingments</div>
                           <div className="divisions3-boxes-box3">Capstone</div>
                           <div className="divisions3-boxes-box4">Demo Day</div>
                           <div className="divisions3-boxes-box5">Career assistance</div>
                       </div>
                       <div className="divisions3-images">
                           <img src={section3_img1} alt="section3_img1" />
                       </div>
                   </div>
                   <div className="division3-gradient-line"></div>
               </div> 
           </div>
        </>
    );
}
export default Section3;
