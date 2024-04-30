import React from "react";
import './Section13.css';
import img13 from './image/img13.png';

function Section13(){

    return(
        <>
            <div className="container13">
                <div className="img13">
                    <img src={img13} alt= "img13" />
                </div>
                <div className="text13">
                    <div className="heading13">
                        <p>Still Want To Know More About 
                           <span> Credmarg</span>?
                        </p>   
                    </div>
                    <div className="details13">
                        <p className="p13_1">
                            Any Questions?
                        </p>
                        <p className="p13_2">
                           You can get in touch with your dedicated
                           relationship Manager. Schedule a One on
                           One Session to know more.
                        </p>
                    </div>
                    <div className="button13">
                        <button className="button13_1">Explore All Opportunities</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section13;