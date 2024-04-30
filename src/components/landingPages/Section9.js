import React from "react";
import './Section9.css';
import section9_img1 from './images/section9_img1.png'

function Section9(){

    return(
        <>
            <div className="section9-container9">
                <div className="container9-divisions">
                    <div className="container9-divisions-h1">Before & After:</div>
                    <div className="container9-divisions-h2">The impact of our program on key skills</div>
                    <div className="container9-divisions-B-and-A">
                        <div className="container9-divisions-B-and-A-before">
                            <div className="container9-before-div-B"></div>
                            <div className="container9-before-text">Before</div>
                        </div>
                        <div className="container9-divisions-B-and-A-line"></div>
                        <div className="container9-divisions-B-and-A-after">
                            <div className="container9-before-div-A"></div>
                            <div className="container9-before-text">After</div>
                        </div>
                    </div>
                    <div className="container9-divisions-image">
                        <img src={section9_img1} alt="section9_img1" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section9;