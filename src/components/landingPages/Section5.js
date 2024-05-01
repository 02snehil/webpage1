import React, { useState } from "react";
import './Section5.css';
import section5_img1 from './images/section5_img1.png';
import section5_img2 from './images/section5_img2.png';

function Section5() {
    const [activeWeek, setActiveWeek] = useState(1);

    const handleWeekButtonClick = (week) => {
        setActiveWeek(week);

    };



    return (
        <div className="section5-container5">
            <div className="container5-content">
                <div className="container5-content-heading">
                    Program curriculum
                </div>
                <div className="container5-content-details">
                    <div className="container5-content-details-weeks">
                        <button
                           className={activeWeek === 1 ? "active-week" : ""}
                           onClick={() => handleWeekButtonClick(1)}>Week 1
                        </button> {" "} <br />
                        <button
                           className={activeWeek === 2 ? "active-week" : ""}
                           onClick={() => handleWeekButtonClick(2)}>Week 2
                        </button> {" "} <br />
                        <button
                          className={activeWeek === 3 ? "active-week" : ""} 
                          onClick={() => handleWeekButtonClick(3)}>Week 3
                        </button> {" "} <br />
                        <button 
                          className={activeWeek === 4 ? "active-week" : ""} 
                          onClick={() => handleWeekButtonClick(4)}>Week 4
                        </button> {" "} <br />
                        <button 
                          className={activeWeek === 5 ? "active-week" : ""} 
                          onClick={() => handleWeekButtonClick(5)}>Week 5
                        </button> {" "} <br />
                        <button 
                          className={activeWeek === 6 ? "active-week" : ""} 
                          onClick={() => handleWeekButtonClick(6)}>Week 6
                        </button> {" "} <br />
                        <button 
                          className={activeWeek === 7 ? "active-week" : ""} 
                          onClick={() => handleWeekButtonClick(7)}>Week 7</button> <br />
                        <button 
                           className={activeWeek === 8 ? "active-week" : ""} 
                           onClick={() => handleWeekButtonClick(8)}>Week 8
                        </button> {" "} <br />
                        <button 
                           className={activeWeek === 9 ? "active-week" : ""} 
                           onClick={() => handleWeekButtonClick(9)}>Week 9
                        </button> {" "} <br />
                        <button 
                          className={activeWeek === 10 ? "active-week" : ""} 
                          onClick={() => handleWeekButtonClick(10)}>Week 10-16
                        </button>{" "} <br />
                        
                    </div>
                    <div className="container5-content-details-line"></div>
                    <div className="container5-content-details-content">
                        {activeWeek === 1 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                    Offline Orientation
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Product Teardown <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Fireside Chat <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Team Bonding Activities <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Panel Bonding Activities <br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 2 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                    Fundamentals of product management
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;What is the role of a product manager <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;What makes for a great PM <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Day to day work of PMs in tech companies <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Communicating with stakeholders<br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 3 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                   Problem discovery, market and user research
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Define customer segments and personas <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Types of user research <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Understanding customer pain points <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Extract key insights from user research<br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 4 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                   Problem framing and prioritization
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Define the right problem statement <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Generate possible ideas to solve problem <br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 5 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                    UX Design
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;What great UX looks like <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Share ideas using wireframes <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Give effective feedback to designers <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Validate the right solution with users<br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 6 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                    Analytics and metrics
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Understanding different types of metrics <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Define success metrics for your product <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Funnel analysis <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Cohort analysis <br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 7 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                  Effective communication as a PM
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Working with designers, engineers <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Communicating via documentation <br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 8 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                    Tech 101 & System Design
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;SQL, Database, APIs and app architectures <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;System design <br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 9 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                    Product launch & adoption
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Product launch checklist <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Launching in phases <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;A/B testing <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Product adoption <br /> <br />
                                </div>
                            </div>
                        )}
                        {activeWeek === 10 && (
                            <div className="container5-content-details-content-week2">
                                <div className="week1-heading">
                                    Capstone project, Interview preparation & Demo Day
                                </div>
                                <div className="week1-content">
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Work on your capstone project <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Get feedback from mentors <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Mock interviews with peers and mentors <br /> <br />
                                    <img src={section5_img1} alt="section5_img1" /> &emsp;Demo Day presentation<br /> <br />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="container5-content-details-curriculum">
                        <div className="container5-curriculum-img">
                            <img src={section5_img2} alt="section5_img2" />
                        </div>
                        <div className="container5-curriculum-heading">
                            Explore our detailed curriculum!
                        </div>
                        <div className="container5-curriculum-details">
                            Understand the in depth concepts and tools
                            you will learn throughout the program.
                        </div>
                        <div className="container5-curriculum-button">
                            <button>Download detailed curriculum</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;
