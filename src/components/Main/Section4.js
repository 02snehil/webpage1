import React from 'react';
import './Section4.css';
import group4_2 from './image/group4_2.png';
import group4_2_1 from './image/group4_2_1.png';
import group4_2_2 from './image/group4_2_2.png';
import icon4_1 from './image/icon4_1.png';
import icon4_2 from './image/icon4_2.png';
import icon4_3 from './image/icon4_3.png';

function Section4(){

   return(
       <>
         <div className='container4'>
            <div className='text4'>
               <div className="heading-button-container">
                   <div className="heading4">
                       <h1>
                          <span style={{ color: " rgb(193, 158, 92)" }}>Make yourself marketable. </span>
                           Let <br /> recruiters judge you on actual<br />
                           work, not just a resume.
                       </h1>
                   </div>
                   <button className="b4"> Join Pesto today </button>
                </div>
                <div className='image_text4'>
                  
                    <div className='t4_1'>
                      <div className='img4_1_1'>
                        <img src={icon4_1} alt='icon4_1'/>
                      </div>
                      <div className='subtext4_1'>
                        <b>Built a profile for free</b>
                        <p>Qualify for jobs at top product startups</p><br/><br/>
                      </div>
                    </div>
                    <div className='t4_2'>
                     <div className='img4_1_2'>
                        <img src={icon4_2} alt='icon4_2'/>
                      </div>
                      <div className='subtext4_2'>
                        <b>Stand out to recruiters</b>
                        <p>Globally-competitive salary based on your skills.</p><br/><br/>
                      </div>
                    </div>
                    <div className='t4_3'>
                      <div className='img4_1_3'>
                        <img src={icon4_3} alt='icon4_3'/>
                      </div>
                      <div className='subtext4_3'>
                        <b>Get offers with zero salary negotiations.</b>
                        <p >Get interviews on your calendar directly on device</p><br/><br/>
                      </div>
                    </div>
                </div>
             </div>
             <div className='image4'>
               <div className='img4_1'>
                <img src={group4_2} alt='group4_1' />
               </div>
               <div className='img4_2'>
                 <div className='img4_2_1'>
                   <img src={group4_2_1} alt='group4_1_1' />
                 </div>
                 <div className='img2_2'>
                   <img src={group4_2_2} alt='group4_2_2' />
                 </div>
               </div>
             </div>
         </div>
       </>
   );
}
export default Section4;
