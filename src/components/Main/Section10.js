import React from "react";
import './Section10.css';
import img10 from './image/img10.png';
import img10_1 from './image/img10_1.png';

function Section10(){

    return(
        <>
         <div className="container10">
            <div className="line10"></div>
            <div className="box10" >
              <div className="box10_1">
                <div className="img10">
                  <img src={img10} alt="img10"/>
                </div>
                <div className="details10">
                  <p className='p10_1'>Hire talent that stands out!</p>
                  <p className='p10_2'>With relevant skills and experience at leading companies, our alumni could add value to
                          your company
                  </p>
                </div>
                <div className="button_div">
                   <button className="button10">Get in touch</button>
                </div>
              </div>  
              <div className="box10_2">
                <img src={img10_1} alt="img10_1" />
              </div>
            </div>
           </div>
        </>
    );
}
export default Section10;