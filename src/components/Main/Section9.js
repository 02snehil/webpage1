import React, { useState, useEffect } from "react";
import './Section9.css';
import img9_1 from './image/img9_1.png';
import img9_2 from './image/img9_2.png';
import img9_3 from './image/img9_3.png';
import img9_4 from './image/img9_4.png';
import img9_5 from './image/img9_5.png';
import img9_6 from './image/img9_6.png';
import img9_7 from './image/img9_7.png';
import img9_8 from './image/img9_8.png';
import img9_9 from './image/img9_9.png';
import img9_10 from './image/img9_10.png';
import img9_11 from './image/img9_11.png';

function Section9() {
    // const [animationCount, setAnimationCount] = useState(0);

    // useEffect(() => {
    //     const imgElement = document.querySelector('.img9 img');
    //     const handleAnimationEnd = () => {
    //         setAnimationCount(prevCount => prevCount + 1);
    //     };

    //     imgElement.addEventListener('animationiteration', handleAnimationEnd);

    //     return () => {
    //         imgElement.removeEventListener('animationiteration', handleAnimationEnd);
    //     };
    // }, []);

    return (
        <div className="container9">
            <div className="heading9">
                <p>We are trusted by the best!</p>
            </div>
            <div className="boxes9">
                <div className="box9_1">
                    <p>Better</p>
                </div>
                <div className="box9_2">
                    <p>640 OXFORD VENTURES</p>
                </div>
            </div>
            
            <div className="sliding-images">
                <img src={img9_1} alt="img9_1" />
                <img src={img9_2} alt="img9_2" />
                <img src={img9_3} alt="img9_3" />
                <img src={img9_4} alt="img9_4" />
                <img src={img9_5} alt="img9_5" />
                <img src={img9_6} alt="img9_6" />
                <img src={img9_7} alt="img9_7" />
                <img src={img9_8} alt="img9_8" />
                <img src={img9_9} alt="img9_9" />
                <img src={img9_10} alt="img9_10" />
                <img src={img9_11} alt="img9_11" />
            </div>
        </div>
    );
}

export default Section9;
