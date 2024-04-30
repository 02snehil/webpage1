import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Main/Login';
import Register from './components/Main/Register';
import Welcome from './components/Main/Welcome';
import Terms from './components/Main/Terms';
import PrivacyPolicy from './components/Main/PrivacyPolicy';
import Main2 from './components/landingPages/Main2';
import ApplyNowMain from './components/applyNow/ApplayNowMain';
import Admin from './components/Main/Admin';


function App() {
  return (
    <>
         <Router>
           <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/landing' element={<Main2 />} />
            <Route path='/apply-now' element={<ApplyNowMain />} />
            <Route path='/admin' element={<Admin />} />

       </Routes>
    </Router>
    </>
  );
}

export default App;
