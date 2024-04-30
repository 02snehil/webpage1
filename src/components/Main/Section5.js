import React from "react";
import "./Section5.css";
import img5_1_1_1 from "./image/img5_1_1_1.png"
import img5_1_1_2 from "./image/img5_1_1_2.png"
import img5_1_1_3 from "./image/img5_1_1_3.png"
import img5_1_2_1 from "./image/img5_1_2_1.png"
import img5_1_2_2 from "./image/img5_1_2_2.png"
import img5_1_2_3 from "./image/img5_1_2_3.png"
import img5_1_3 from "./image/img5_1_3.png"

function Section5(){

    return(
        <>

            <div className="container5">
                <div className="videos5_1">
                    <div className="videos5_1_1">
                        <div className="videos5_1_1_1">
                            <div className="img5_1_1_1">
                                <img src={img5_1_1_1} alt="img5_1_1_1" />
                            </div>
                            <div className="enroll5_1_1">
                                <p>Enrolment till <b>22 May, 2024</b></p>
                            </div>
                            <div className="details5_1_1">
                                <h2>Product Management Launchpad</h2>
                                <h4>Learn the skills and tools to solve real product problems. Build <br />
                                    your product portfolio and crack your next PM interview. A multi-<br />
                                    instructor course to give a holistic and well-rounded approach t…</h4>
                            </div>
                            <div >
                                <button className="b5_1">Learn more</button>
                            </div>
                        </div>
                        <div className="videos5_1_1_2">
                            <div className="img5_1_1_1">
                                <img src={img5_1_1_2} alt="img5_1_1_2" />
                            </div>
                            <div className="enroll5_1_1">
                                <p>Enrolment opening soon</p>
                            </div>
                            <div className="details5_1_1">
                                <h2>Data Science Launchpad</h2>
                                <h4>Become an exceptional data scientist by acquiring essential<br />
                                    skills, harnessing the power of data, and making data-driven<br />
                                    decisions that impact the real world.<br />
                                </h4>
                            </div>
                            <div >
                                <button className="b5_1">Learn more</button>
                            </div>
                        </div>
                        <div className="videos5_1_1_3">
                            <div className="img5_1_1_1">
                                <img src={img5_1_1_3} alt="img5_1_1_3" />
                            </div>
                            <div className="enroll5_1_1">
                                <p>Enrolments closed</p>
                            </div>
                            <div className="details5_1_1">
                                <h2>PM Interview Mastery</h2>
                                <h4>Why leave your PM interview to chance? Polish your skills and<br />
                                    bridge your gaps by enrolling in our course. <br/>
                                </h4>
                                <p style={{color:'#616161'}}>Starting on </p>
                                <p><b>26 Apr, 2024 </b></p>   
                            </div>
                            <div >
                                <button className="b5_1">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="videos5_1_2">
                        <div className="videos5_1_1_1">
                            <div className="img5_1_1_1">
                                <img src={img5_1_2_1} alt="img5_1_2_1" />
                            </div>
                            <div className="enroll5_1_1">
                                <p>Enrolment till <b>29 Apr, 2024</b></p>
                            </div>
                            <div className="details5_1_1">
                                <h2>Full-stack Development Launchpad</h2>
                                <h4>
                                  Achieve mastery in full-stack engineering through practical<br/>
                                  projects and expert feedback from industry professionals
                                </h4>
                            </div>
                            <div ><br/>
                                <button className="b5_1">Learn more</button>
                            </div>
                        </div>
                        <div className="videos5_1_1_2">
                            <div className="img5_1_1_1">
                                <img src={img5_1_2_2} alt="img5_1_2_2" />
                            </div>
                            <div className="enroll5_1_1">
                                <p>Enrolment till <b>29 Apr, 2024</b></p>
                            </div>
                            <div className="details5_1_1">
                                <h2>Backend Engineering Launchpad</h2>
                                <h4>Develop, enhance, and hone your backend engineering skills.<br />
                                    Apply your learnings to practical projects and become an<br />
                                    exceptional developer.
                                </h4>
                            </div>
                            <div >
                                <button className="b5_1">Learn more</button>
                            </div>
                        </div>
                        <div className="videos5_1_1_3">
                            <div className="img5_1_1_1">
                                <img src={img5_1_2_3} alt="img5_1_2_3" />
                            </div>
                            <div className="enroll5_1_1">
                                <p>Enrolments opening soon</p>
                            </div>
                            <div className="details5_1_1">
                                <h2>Tech Mastery for PMs</h2>
                                <h4>Master technical concepts, enhance collaboration with<br />
                                    developers, and sharpen your product management skills.
                                </h4>  
                            </div>
                            <div ><br/><br/><br/>
                                <button className="b5_1">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="videos5_2">
                    <div className="img5_1_3">
                      <img src={img5_1_3} alt="img5_1_3" />
                    </div>
                    <div className="enroll5_1_1">
                       <p>Enrolments opening soon</p>
                    </div>
                    <div className="details5_1_1">
                        <h2>DSA for Career Advancement</h2>
                        <h4>A practical DSA course tailored for professionals targeting top-<br/>
                            tier tech interviews
                        </h4>
                    </div>
                    <div >
                        <button className="b5_1">Learn more</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section5;