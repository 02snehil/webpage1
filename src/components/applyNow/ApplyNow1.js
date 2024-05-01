import React from "react";
import './ApplyNow1.css'

function ApplyNow1(){

    return(
        <>
          
            <div className="applyNow1-container">
                <div className="applyNow1-container-division">
                    <div className="division-launchpad">
                        <div className="division-launchpad-left">
                            <br />
                                 Hey there, you're applying for <br />
                           <span> Product Management Launchpad</span>
                        </div>
                        <div className="division-launchpad-right">
                            <div className="division-launchpad-right-duration">
                                Program duration <br/>
                                <span>16 <span> weeks</span> </span>
                            </div>
                            <div className="division-launchpad-right-line"></div>

                            <div className="division-launchpad-right-time">
                                Time commitment <br/>
                                <span>10-12 <span> hrs/week</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ApplyNow1;