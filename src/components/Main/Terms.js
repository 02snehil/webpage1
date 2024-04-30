import React from "react";
import './Terms.css'; // Import the CSS file

const Terms = () => {
  return (
    <div className="terms-container">
      <header>
        <h1>Terms and Conditions</h1>
      </header>
      <main>
        <div className="terms-section">
          <section>
            <h2>1. Introduction</h2>
            <p>These terms and conditions govern your use of our website. By using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</p>
          </section>
        </div>
        <div className="terms-section">
          <section>
            <h2>2. Intellectual Property Rights</h2>
            <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
          </section>
        </div>
        <div className="terms-section">
          <section>
            <h2>3. Restrictions</h2>
            <p>You are restricted from all of the following: publishing any website material in any other media; selling, sublicensing and/or otherwise commercializing any website material; publicly performing and/or showing any website material; using this website in any way that is or may be damaging to this website; using this website in any way that impacts user access to this website; using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.</p>
          </section>
        </div>
        {/* Add more sections as needed */}
      </main>
      <footer>
        <p>Last updated: 23/04/2024</p>
        <p>Contact: snehil.1278@gmail.com</p>
      </footer>
    </div>
  );
};

export default Terms;
