import React from "react";
import './Section8.css';
import Link8 from './image/Link8.png';
import img8_1 from './image/img8_1.png';
import img8_2 from './image/img8_2.png';
import img8_3 from './image/img8_3.png';
import img8_1_1 from './image/img8_1_1.png';
import img8_1_2 from './image/img8_1_2.png';
import img8_1_3 from './image/img8_1_3.png';

function Section8(){

    return(
        <>
        <div className="container8">
            <div className="box8_1">
                <div className="img8_1">
                    <a href="https://youtu.be/sKS3wLhA-wk?si=72ZGtisGzTs68B5W" target="_blank">
                     <img src={img8_1} alt="img8_1" />
                    </a> 
                </div>
                <div className="img_text">
                    <div className="pp">
                        <img src={img8_1_1} alt="img8_1_1" />
                    </div>
                    <div className="text8">
                        <p className="p8_1">Saurab Sahu</p>
                        <p className="p8_2">SDE-I @Adobe</p>
                    </div>
                    <div className="Link8">
                        <img src={Link8} alt= "Link8"/>
                    </div>
                </div>
            </div>
            <div className="box8_2">
                <div className="img8_1">
                    <a href="https://youtu.be/8W80p21X8JE?si=h-E0Rm58WNpT-tMh" target="_blank">
                      <img src={img8_2} alt="img8_2" />
                    </a>
                </div>
                <div className="img_text">
                    <div className="pp">
                        <img src={img8_1_2} alt="img8_1_2" />
                    </div>
                    <div className="text8">
                        <p className="p8_1">Rishika Sharma</p>
                        <p className="p8_2">Data Scientist @Flipkart</p>
                    </div>
                    <div className="Link8">
                        <img src={Link8} alt= "Link8"/>
                    </div>
                </div>
            </div>
            <div className="box8_3">
                <div className="img8_1">
                    <a href="https://youtu.be/8W80p21X8JE?si=h-E0Rm58WNpT-tMh" target="_blank">
                      <img src={img8_3} alt="img8_3" />
                    </a>
                </div>
                <div className="img_text">
                    <div className="pp">
                        <img src={img8_1_3} alt="img8_1_3" />
                    </div>
                    <div className="text8">
                        <p className="p8_1">Vishwash Kumae</p>
                        <p className="p8_2">Product Manager <br /> @Razorpay</p>
                    </div>
                    <div className="Link8">
                        <img src={Link8} alt= "Link8"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Section8;