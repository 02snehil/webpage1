import React from "react";
import './Section13.css';

function Section13(){

    return(
        <>
            <div className="section13-container13">
                <div className="section13-divisions">
                    <div className="section13-divisions-heading">Weekly Schedule</div>
                    <div className="section13-divisions-subheading">
                        These are weekly recurring sessions and learning 
                        activities scheduled throughout the duration of this program.
                    </div>
                    <div className="section13-divisions-details">
                        <div className="section13-divisions-details-core">
                            <div className="section13-divisions-details-core-heading">Core Session</div>
                            <div className="section13-divisions-details-core-detail">
                                Live, hands-on, activity-led sessions conducted by the instructor.
                            </div>
                            <div className="section13-divisions-details-core-div1">Sat, 4:30 AM - 7:30 AM (CUT)</div>
                            <div className="section13-divisions-details-core-div2">Sun, 4:30 AM - 6:30 AM (CUT)</div>
                        </div>
                        <div className="section13-divisions-details-QnA">
                            <div className="section13-divisions-details-core-heading">QnA session</div>
                            <div className="section13-divisions-details-core-detail">
                                Instructors/mentors led brainstorming and doubt-solving sessions.
                            </div>
                            <div className="section13-divisions-details-QnA-div1">Sat, 11:30 AM - 1:30 PM (CUT)</div>
                        </div>
                        <div className="section13-divisions-details-active">
                            <div className="section13-divisions-details-core-heading">Active learning projects</div>
                            <div className="section13-divisions-details-core-detail">
                               Hands-on, experiential and real-world projects to test your knowledge and skills.
                            </div>
                            <div className="section13-divisions-details-active-div1">Assigned weekly</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section13;