import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { auth } from './firebase';

function Welcome() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const email = location.state.id

  // const email = localStorage.getItem('email');

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('email');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLogout = async () => {
    try {
      // Make a request to your backend to update the logout time
      await axios.post("http://localhost:8000/logout", {
        email: email
      });

      // Remove email from localStorage
      localStorage.removeItem('email');

      // Sign out the user from Firebase
      auth.signOut().then(() => {
        navigate('/login');
      }).catch((error) => {
        console.error("Logout Failed:", error.message);
      });
    } catch (error) {
      console.error("Error occurred during logout:", error.message);
      // Handle error if necessary
    }
  };

  if(!email){
    navigate('/login');
    return null;
  }

  // const location=useLocation();
  if (!email){
    navigate('/login');
    return null;
  }
  return (
    <div>
      <h2>Welcome, {location.state.id}!</h2> {/* for node server with mongodb*/}
      {/* <h2>Welcome, {email}!</h2> */}   {/* for if u login or sigh up with google*/}
      <h4>This is your dashboard.</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;