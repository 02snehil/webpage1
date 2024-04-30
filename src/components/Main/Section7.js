import React from "react";
import './Section7.css';
import img7 from './image/img7.png'

function Section7(){

    return(
        <>
            <div className="container7">
                <div className="img7">
                    <img src={img7} alt="img7"/>
                </div>
                <div className="details7">
                    <p className='p1'>Eager to empower others?</p>
                    <p className='p2'>Join us as an instructor or mentor and help learners upskill with your expertise</p>
                </div>
                <div>
                    <button className="button7">Get in touch</button>
                </div>
            </div>
        </>
    );
}
export default Section7;