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
                          <span style={{ color: " rgb(193, 158, 92)" }}>Highlight your value 
                           through demonstrated achievements, </span>
                           allowing recruiters to assess your capabilities beyond a traditional resume.
                       </h1>
                   </div>
                   <div className='space'></div>
                   <button className="b4"> Join Pesto today </button>
                </div>
                <div className='image_text4'>
                  
                    <div className='t4_1'>
                      <div className='img4_1_1'>
                        <img src={icon4_1} alt='icon4_1'/>
                      </div>
                      <div className='subtext4_1'>
                        <b>Create a comprehensive profile at no cost.</b>
                        <p>Become eligible for positions at premier product startups.</p><br/><br/>
                      </div>
                    </div>
                    <div className='t4_2'>
                     <div className='img4_1_2'>
                        <img src={icon4_2} alt='icon4_2'/>
                      </div>
                      <div className='subtext4_2'>
                        <b>Catch the eye of recruiters.</b>
                        <p>Earn a globally competitive salary matched to your skills.</p><br/><br/>
                      </div>
                    </div>
                    <div className='t4_3'>
                      <div className='img4_1_3'>
                        <img src={icon4_3} alt='icon4_3'/>
                      </div>
                      <div className='subtext4_3'>
                        <b>Secure offers without the need for salary negotiations.</b>
                        <p >Fill your calendar with interview invitations directly.</p><br/><br/>
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
