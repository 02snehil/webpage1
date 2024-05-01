import React from "react";
import './Section8.css';
import section8_image1 from './images/section8_image1.png'
import section8_image2 from './images/section8_image2.png'
import section8_image3 from './images/section8_image3.png'
import section8_image4 from './images/section8_image4.png'

function Section8(){

    return(
        <>
            <div className="section8-container8">
                <div className="container8-divisions">
                    <div className="container8-divisions-heading">
                        Valuable add-ons
                    </div>
                    <div className="container8-divisions-boxes">
                        <div className="container8-divisions-boxes-box1">
                            <div className="container8-box1-img">
                                <img src={section8_image1} alt="section8_image1"  />
                            </div>
                            <div className="container8-box1-bonus">Bonus course ✨</div>
                            <div className="container8-box1--heading">Tech Mastery for PMs</div>
                            <div className="container8-box1-details">
                                Tired of nodding along in tech chats? In 
                                just three weeks, grasp tech essentials, 
                                collaborate effectively with developers, 
                                and become better at building tech-driven products.
                            </div>
                        </div>
                        <div className="container8-divisions-boxes-box1">
                            <div className="container8-box1-img">
                                <img src={section8_image2} alt="section8_image2"  />
                            </div>
                            <div className="container8-box1-bonus">Bonus course ✨</div>
                            <div className="container8-box1--heading">PM Interview Mastery</div>
                            <div className="container8-box1-details">
                                Why leave your PM interview to chance? 
                                Polish your skills and bridge your gaps 
                                by enrolling in our course.
                            </div>
                        </div>
                        <div className="container8-divisions-boxes-box1">
                            <div className="container8-box1-img">
                                <img src={section8_image3} alt="section8_image3"  />
                            </div>
                            <div className="container8-box1-bonus">Masterclasses ✨</div>
                            <div className="container8-box1--heading">Exclusive masterclasses by CXOs</div>
                            <div className="container8-box1-details"> 
                                Gain valuable insights from CXOs. Enhance your 
                                skills and knowledge with exclusive insider 
                                perspectives, available only to enrolled learners.
                            </div>
                        </div>
                        <div className="container8-divisions-boxes-box1">
                            <div className="container8-box1-img">
                                <img src={section8_image4} alt="section8_image4"  />
                            </div>
                            <div className="container8-box1-bonus">Meet your tribe ✨</div>
                            <div className="container8-box1--heading">Offline orientation & meet-ups</div>
                            <div className="container8-box1-details">
                                As a member of our community, you'll have 
                                the unique opportunity to participate in 
                                these exclusive gatherings. Where you elevate 
                                your knowledge & make meaningful connections.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section8;