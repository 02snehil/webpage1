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
    const [value,setValue] = useState('');


    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('email');
        };
       
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []); 

    const handleGoogleRegister =()=>{
        signInWithPopup(auth,provider)
            .then((data)=>{
               console.log(data.user.email);
               setValue(data.user.email);
               localStorage.setItem('email',data.user.email);
               navigate('/welcome');
            }).catch(error => {
            console.error("Register failed:", error.message);
        });
    }

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


    const [phone,setPhone]=useState('')
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [r_password,setR_password]=useState('')

    async function register(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/register",{
                phone,uname,email,password,r_password
            })  
            .then(res=>{
                if(res.data === "The detail you have given that detail user is there"){
                  
                    alert("user already exixt")
                }
                else if(res.data === "good to go for registration"){
                    navigate("/welcome ",{state:{id:uname}})
               }
            })  
            .catch(e=>{
                 alert("wrong details")
                 console.log(e);
            })   
        }
        catch(e){
            console.log(e);
        
        }

        
    }





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