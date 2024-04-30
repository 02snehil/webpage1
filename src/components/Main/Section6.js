import React from "react";
import './Section6.css'
import img6_1 from './image/img6_1.png'
import img6_2 from './image/img6_2.png'
import img6_3 from './image/img6_3.png'
import img6_4 from './image/img6_4.png'
import img6_5 from './image/img6_5.png'

function Section6(){
    return(
        <>
        <div className="container6">
            <div className='Container6_1'>
                <div className="Container-text">
                   <h1>Top developers love Pesto. Here's why:</h1>
                   <p>We get the recruiters to you. We help you thrive. We only work with the best in the business.</p>
                   <h3 style={{textAlign:"center"}}>But that's not all.</h3>
                </div>
            </div>    
            <div className="division6-1">
               <div className="grid-container1">
                    <div className="div6-1">
                        <img src={img6_1} alt="imag6-1" />
                        <h2 style={{color:'black'}}>Guarantee job security with a platform that looks out for you.</h2>
                        <p style={{color:'black',textAlign:'start'}}>Pesto offers full term health insurance and assists you with all contractual paperwork during hiring. We keep your employers accountable every step of the way.</p>   
                    </div>
                    <div className="div6-2">
                        <img src={img6_2} alt="imag6-4" className="img6_4" />
                        <h2 style={{color:'black'}}>Join a global dev aggregate.</h2>
                        <p style={{color:'black',textAlign:'start'}}>Local recognition does not cut it anymore. Get vetted and join a curated list of top developers from around the world.</p>
                    </div> 
                </div>
            </div>
            <div className="division6-2">
                <div className="grid-container2">
                    <div className="div6-3">
                         <h2 style={{color:'black'}}>Find a lifelong career partner.</h2>
                         <p style={{color:'black',textAlign:'start'}}>Your journey with Pesto doesn’t end when you land a job. Use our platform to find exciting career growth opportunities when you want to switch jobs, and find mentors for life.</p>
                    </div>
                    <div className="div6-3-image">
                       <img src={img6_3} alt="imag6-3" />
                    </div>
                </div>
                <div className="grid-container3">
                    <div className="div6-4">
                          <h2 style={{color:'black'}}>Attend events with speakers you look up to.</h2>
                          <p style={{color:'black', alignContent:'start'}}>Access live community events, monthly town-halls, work shops and more with Pesto Alums and guest speakers throughout the year.</p>
                          <img src={img6_5} alt="imag6-5" />
                    </div>
                </div>               
              
                
            </div>
            <div className="grid-container4">
                <div className="div6-5-image">
                     <img src={img6_4} alt="imag6-4" />
                </div>
                <div className="div6-5">
                     <h2 style={{color:'black'}}>Get deals and benefits that last a lifetime.</h2>
                     <p style={{color:'black',textAlign:'start'}}>Access premium deals, subscriptions and discounts for top dev tools in the market, exclusive for Pesto members.</p>
                </div>
            </div>
            </div>
        </>
    );
}
export default Section6