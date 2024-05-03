//Register.js

import React, { useEffect, useState } from "react";
import plogo from './image/plogo.jpg';
import video from './image/video.png';
import google_icon from './image/google_icon.jpg';
import './Register.css';
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import axios from "axios";

function Register(){

    const navigate = useNavigate();
    const [phone,setPhone]=useState('')
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [r_password,setR_password]=useState('')
    const [value,setValue] = useState('');



    //Sign-up with google code
    const handleGoogleRegister = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                console.log(data.user.email);
                const email = data.user.email;
                const provider = "Google"; // Set the provider to "google" for Google signup
    
                //sending the email id and provider to the backend server to save it in the database
                axios.post("http://localhost:8000/register", { email, provider })
                    .then((res) => {
                        //Handling the response from the backend if needed
                        console.log(res.data);
                        //if register is successfully done so navigate it to the welcome page
                        if (res.data.message === "Registration Successful") {
                            console.log("Navigating to welcome page...");
                            navigate('/welcome', { state: { id: email } });
                        }
                    })
                    .catch((error) => {
                        console.error("Failed to register with Google:", error);
                    });
            })
            .catch((error) => {
                console.error("Google Signup failed", error.message);
            });
    };



  
    //Sign-up with email/submit button  
    async function register(e) {
        e.preventDefault();
    
        try {
            // Set the provider to "email" for email signup
            const provider = "Email";
            
            const response = await axios.post("http://localhost:8000/register", {
                phone,
                uname,
                email,
                password,
                r_password,
                provider  // Include the provider information
            });

            if (response.data.message === "Registration Successful"){
                console.log("Navigating to welcome page...");
                navigate("/welcome", { state: { id: uname } });
            }
            else{
                alert("Failed to register. Please try again")
            }
        } catch (error) {
            console.error("Failed to register:", error);
            alert("Failed to register. Please try again later.");
        }
    }

 
  


    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('email');
        };
       
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    



    useEffect(()=>{
        setValue(localStorage.getItem('email'));
    });

    useEffect(() => {
        const handlePopState = () => {
            if (window.location.pathname === '/register') {
                navigate('*'); 
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);




    return(
        <>
          <div className="register">
            {/* <div className="logo_register">
                <img src={plogo} alt="plogo" />
                <hr className="hr1" />
            </div> */}
            <div className="content_register">
                <div className="video">
                    <h2>Pesto developer get hired 3x faster!</h2>
                    <a href="https://youtu.be/6seL_erGiWE"><img src={video} alt='video' /> </a> <br/><br/><br/><br/><br/><br/><br/>
                </div>
                <div className="authentication">
                   <p className="p1"> <b>Create an Account</b></p>
                   <p className="p2">Please enter your details</p>
                   <br />
                   <form action="POST">
                      <b>Phone Number*</b> <br /><br />
                      <input type = "number"
                         onChange={(e)=>{setPhone(e.target.value)}} 
                         name="phone" required  
                         className="input"/> <br /><br />

                      <b>Name</b> <br /><br />
                      <input type = "text" 
                         onChange={(e)=>{setUname(e.target.value)}} 
                         name="uname" 
                         required 
                         className="input" /> <br /><br />

                      <b>Email</b> <br /><br />
                      <input type = "email" 
                         onChange={(e)=>{setEmail(e.target.value)}} 
                         name="email" 
                         required 
                         className="input" /> <br /><br />

                      <b>Password</b> <br /><br />
                      <input type = "password" 
                         onChange={(e)=>{setPassword(e.target.value)}} 
                         name="password" 
                         required 
                         className="input" /> <br /><br />

                      <b>Re-enter Password</b> <br /><br />
                      <input type = "password" 
                         onChange={(e)=>{setR_password(e.target.value)}} 
                         name="r_password" 
                         required 
                         className="input" /> <br /><br />
                      <button type="submit" 
                         onClick={register}
                         className="registerB"> Submit 
                      </button>
                   </form>
                   <br /><br />
                   <div className="or-container">
                        <hr className="hr2" />
                        <div className="or-text">or</div>
                        <hr className="hr3" />
                   </div>
                    <br /> 
                </div>
            </div>
            <button onClick={handleGoogleRegister} className="buttonregister"><img src={google_icon} alt="register_logo" className="google_icon" />&emsp;<span style={{marginLeft:'-10px'}}>Sign up with Google</span></button>
            <h4 className="register_link"><span style={{fontWeight:'500',marginLeft:'80px'}}>Have an account? </span><a href="/login" style={{textDecoration:'none',color:'black'}}>Login</a></h4>
       </div>
        </>
    );
}
export default Register;












