import React from "react";
import'./ApplyNow2.css';
import timeline from './timeline.png'
import letsGo from './letsGo.png'

function ApplyNow2(){

    return(
        <>
            <div className="ApplyNow2-container">
                <div className="ApplyNow2-container-division">
                    <div className="ApplyNow2-container-division-submit">
                        <div className="division-submit-numbers">
                            01 <br />
                            <span> <span>
                                02</span>  <br /> 03
                            </span>
                        </div>
                        <div className="division-submit-line">
                            <img src={timeline} alt="timeline" />
                        </div>
                        <div className="division-submit-details">
                            <div className="division-submit-details-application">
                                Submit application  <br/>
                                <span>We follow an application process to carefully 
                                      curate our learning community.
                                </span>
                            </div>
                            <div className="division-submit-details-selected">
                                Get selected  <br />
                                <span>Upon confirmation of your acceptance, make the 
                                    necessary payment to secure your spot.
                                </span>
                            </div>
                            <div className="division-submit-details-start">
                                Start your journey <br />
                                <span>Congratulations, you're in! It's 
                                      time to embark on your journey.
                                </span>
                             </div>

                        </div>
                    </div>
                    <div className="ApplyNow2-container-division-letsgo">
                        <div className="letsgo-img">
                            <img src={letsGo} alt="letsGo" />
                        </div>
                        <div className="letsgo-heading">
                           We evaluate each application carefully
                        </div>
                        <div className="letsgo-details">
                          Please provide your best answers to these
                          questions so we can decide if this program is
                          suitable for you.
                        </div>
                        <div className="letsgo-button">
                            <a href="/register"><button>Let's go</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ApplyNow2;