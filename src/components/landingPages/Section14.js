import React from "react";
import './Section14.css';
import section14_img1 from './images/section14_img1.png'


function Section14(){

    return(
        <>
            <div className="section14-container14">
                <div className="section14-container14-line"></div>
                <div className="section14-container14-launchpad">
                    <div className="section14-container14-launchpad-left">
                        <div className="section14-container14-launchpad-left-heading">
                            Product Management Launchpad
                        </div>
                        <div className="section14-container14-launchpad-left-button">
                            <a href="/apply-now"><button>Apply now</button></a>
                        </div>
                    </div>
                    <div className="section14-container14-launchpad-right">
                        <div className="section14-container14-launchpad-right-img">
                             <img src={section14_img1} alt="section14_img1" />
                        </div>
                        <div className="section14-container14-launchpad-right-details">
                            <div className="section14-container14-launchpad-right-details-enroll">
                                <div className="enroll-heading"> Enrolment ends on</div>
                                <div className="enroll-date">22 May</div>
                            </div>
                            <div className="section14-container14-launchpad-right-details-course">
                                <div className="course-heading">Course starts on</div>
                                <div className="course-date">31 May</div>
                            </div>
                            <div className="section14-container14-launchpad-right-details-time">
                                <div className="time-heading">Time commitment</div>
                                <div className="time-details">10-12 hours/week</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section14;