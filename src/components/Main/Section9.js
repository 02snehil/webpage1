import React, { useState, useEffect } from "react";
import './Section9.css';
import sec9_img1 from './image/sec9_img1.png'
import sec9_img2 from './image/sec9_img2.png'
import sec9_img3 from './image/sec9_img3.png'
import sec9_img4 from './image/sec9_img4.png'
import sec9_img5 from './image/sec9_img5.png'
import sec9_img6 from './image/sec9_img6.png'
import sec9_img1_1 from './image/sec9_img1_1.png'
import sec9_img2_1 from './image/sec9_img2_1.png'
import sec9_img3_1 from './image/sec9_img3_1.png'
import sec9_img4_1 from './image/sec9_img4_1.png'
import sec9_img5_1 from './image/sec9_img5_1.png'
import sec9_img6_1 from './image/sec9_img6_1.png'


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
                <div className="section9-division1">
                    <div className="section9-division1-image">
                        <img src={sec9_img1} alt="sec9_img1" />
                    </div>
                    <div className="section9-division1-name">Kawaljeet Kaur</div>
                    <div className="section9-division1-position">Ex- Engineering Manager</div>
                    <div className="section9-division1-compony">
                        <img src={sec9_img1_1} alt="sec9_img1_1" />
                    </div>
                </div>
                <div className="section9-division1">
                    <div className="section9-division1-image">
                        <img src={sec9_img2} alt="sec9_img2" />
                    </div>
                    <div className="section9-division1-name">Abhinav Chhikara</div>
                    <div className="section9-division1-position">SDE-II</div>
                    <div className="section9-division1-compony">
                        <img src={sec9_img2_1} alt="sec9_img2_1" />
                    </div>
                </div>
                <div className="section9-division1">
                    <div className="section9-division1-image">
                        <img src={sec9_img3} alt="sec9_img3" />
                    </div>
                    <div className="section9-division1-name">Abhash Kumar</div>
                    <div className="section9-division1-position">Ex- Engineering Manager</div>
                    <div className="section9-division1-compony">
                        <img src={sec9_img3_1} alt="sec9_img3_1" />
                    </div>
                </div>
                <div className="section9-division1">
                    <div className="section9-division1-image">
                        <img src={sec9_img4} alt="sec9_img4" />
                    </div>
                    <div className="section9-division1-name">Sudhir Binchar</div>
                    <div className="section9-division1-position">Sr. Software Engineering</div>
                    <div className="section9-division1-compony">
                        <img src={sec9_img4_1} alt="sec9_img4_1" />
                    </div>
                </div>
                <div className="section9-division1">
                    <div className="section9-division1-image">
                        <img src={sec9_img5} alt="sec9_img5" />
                    </div>
                    <div className="section9-division1-name">Mohisin Darr</div>
                    <div className="section9-division1-position">Product Manager</div>
                    <div className="section9-division1-compony">
                        <img src={sec9_img5_1} alt="sec9_img5_1" />
                    </div>
                </div>
                <div className="section9-division1">
                    <div className="section9-division1-image">
                        <img src={sec9_img6} alt="sec9_img6" />
                    </div>
                    <div className="section9-division1-name">Abhimanyu Tak</div>
                    <div className="section9-division1-position">SDE-III</div>
                    <div className="section9-division1-compony">
                        <img src={sec9_img6_1} alt="sec9_img6_1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section9;
