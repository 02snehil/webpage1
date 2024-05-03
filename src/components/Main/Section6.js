import React from "react";
import './Section6.css'
import img6_1 from './image/img6_1.png'
import img6_2 from './image/img6_2.png'
import img6_3 from './image/img6_3.png'
import img6_4 from './image/img6_4.png'
import div6_4_2_img from './image/div6_4_2_img.png'

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
                        <h2 style={{color:'black'}}>Ensure your job security with a platform dedicated to your well-being.</h2>
                        <p style={{color:'black',textAlign:'start'}}>Pesto offers full-term health insurance and assists with hiring paperwork, ensuring employer accountability.</p>   
                    </div>
                    <div className="div6-2">
                        <img src={img6_2} alt="imag6-4" className="img6_4" />
                        <h2 style={{color:'black'}}>Become part of a global developer community.</h2>
                        <p style={{color:'black',textAlign:'start'}}>Elevate beyond local recognition. Get vetted and join a handpicked list of top developers worldwide.</p>
                    </div> 
                </div>
            </div>
            <div className="division6-2">
                <div className="grid-container2">
                    <div className="div6-3">
                         <h2 style={{color:'black'}}>Secure your career with a platform that prioritizes your job stability.</h2>
                         <p style={{color:'black',textAlign:'start'}}>Your journey with us extends beyond job placement. Utilize our platform to discover exciting career advancement opportunities when seeking new roles, and connect with lifelong mentors.</p>
                    </div>
                    <div className="div6-3-image">
                       <img src={img6_3} alt="imag6-3" />
                    </div>
                </div>
                <div className="grid-container3">
                    <div className="div6-4">
                          <h2 style={{color:'black'}}>Participate in events featuring speakers you admire..</h2>
                          <p style={{color:'black', alignContent:'start'}}>Engage in live community events, monthly town halls, workshops, and more with Pesto Alums and guest speakers year-round.</p>
                          <div className="div6-4-2">
                               <div className="div6-4-2-image">
                                  <img src={div6_4_2_img} alt="div6_4_2_img" />
                               </div>
                               <div className="div6-pic-name">Vishwash Kumar</div>
                               <div className="div6-pic-disg">Product Manager  @Razorpay</div>
                          </div>
                    </div>
                </div>               
              
                
            </div>
            <div className="grid-container4">
                <div className="div6-5-image">
                     <img src={img6_4} alt="imag6-4" />
                </div>
                <div className="div6-5">
                     <h2 style={{color:'black'}}>Unlock exclusive deals and lifelong benefits.</h2>
                     <p style={{color:'black',textAlign:'start'}}>Gain access to premium deals, subscriptions, and discounts for leading development tools in the market, exclusively available to Pesto members.</p>
                </div>
            </div>
            </div>
        </>
    );
}
export default Section6