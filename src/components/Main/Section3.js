// Section3.js
import React, { useState } from "react";
import "./Section3.css";
import img3_1_1 from './image/img3_1_1.png'
import img3_1_2 from './image/img3_1_2.png'
import img3_1_3 from './image/img3_1_3.png'
import img3_1_4 from './image/img3_1_4.png'
import img3_1_5 from './image/img3_1_5.png'
import logo3_1_1 from './image/logo3_1_1.png'
import logo3_1_2 from './image/logo3_1_2.png'
import logo3_1_3 from './image/logo3_1_3.png'
import logo3_1_4 from './image/logo3_1_4.png'
import logo3_1_5 from './image/logo3_1_5.png'

function Section3() {
    const [slideIndex, setSlideIndex] = useState(0);

    const alumniData = [
        
        {
            name: "Abhishek Shukla",
            position: "Principal Product Manager",
            image: img3_1_2,
            logo: logo3_1_2
        },
        {
            name: "Abhishek Shukla",
            position: "Principal Product Manager",
            image: img3_1_2,
            logo: logo3_1_2
        },
        {
            name: "Prashanth Bhaskaran",
            position: "Product Manager",
            image: img3_1_3,
            logo: logo3_1_3
        },
        
        {
            name: "Prashanth Bhaskaran",
            position: "Product Manager",
            image: img3_1_3,
            logo: logo3_1_3
        },
        {
            name: "Akash Daga",
            position: "SDE-III",
            image: img3_1_4,
            logo: logo3_1_4
        },
        {
            name: "Kumar Utsav",
            position: "Product Manager",
            image: img3_1_5,
            logo: logo3_1_5
        },
        {
            name: "Rishabh Dev",
            position: "Co Founder",
            image: img3_1_1,
            logo: logo3_1_1
        },
        {
            name: "Abhishek Shukla",
            position: "Principal Product Manager",
            image: img3_1_2,
            logo: logo3_1_2
        },
        {
            name: "Prashanth Bhaskaran",
            position: "Product Manager",
            image: img3_1_3,
            logo: logo3_1_3
        },
        {
            name: "Akash Daga",
            position: "SDE-III",
            image: img3_1_4,
            logo: logo3_1_4
        },
        {
            name: "Kumar Utsav",
            position: "Product Manager",
            image: img3_1_5,
            logo: logo3_1_5
        },
        
    ];

    return (
        <>
            <div className="container3">
                <div className="heading3">
                    <p>Check out <span> our Pesto alumni.</span></p>
                </div>
                <div className="alumi_intro">
                    {alumniData.map((alumni, index) => (
                        <div className="intro1" key={index}>
                            <div className="intro1_1">
                                <img src={alumni.image} alt={`img_${index + 1}`} />
                            </div>
                            <div className="intro1_2">
                                <p className="p3_1">{alumni.name}</p>
                                <p className="p3_2">{alumni.position}</p>
                            </div>
                            <div className="intro1_3">
                                <img src={alumni.logo} alt={`logo_${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Section3;
