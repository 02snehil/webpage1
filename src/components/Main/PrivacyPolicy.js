import React from "react";
import './PrivacyPolicy.css'; 

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="header">
        <h1>Privacy Policy</h1>
      </div>
      <div className="main">
        <div className="section">
          <h2>1. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
        </div>
        <div className="section">
          <h2>2. Log Data</h2>
          <p>We want to inform you that whenever you visit our service, we collect information that your browser sends to us that is called Log Data.</p>
        </div>
        <div className="section">
          <h2>3. Cookies</h2>
          <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.</p>
        </div>
        <div className="section">
          <h2>4. Third Party Services</h2>
          <p>We may employ third-party companies and individuals due to the following reasons: to facilitate our service; to provide the service on our behalf; to perform service-related services; or to assist us in analyzing how our service is used.</p>
        </div>
        <div className="section">
          <h2>5. Security</h2>
          <p>We value your trust in providing us with your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
        </div>
        {/* Add more sections as needed */}
      </div>
      <div className="footer">
        <p>Last updated: 23/04/2024</p>
        <p>Contact: snehil.1278@gmail.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
