import React from 'react';
import backgroundstatue from "../../../assets/backgroundstatue.jpg";
import "./footer.css";

function ContactMe() {
  return (
    <div className="contact-main">
      <div 
        className="contact-container"
        style={{ backgroundImage: `url(${backgroundstatue})` }}
      >
        <div className="content-overlay">
          <h1>Let's work <br/>together</h1>
        </div>
        <div className="button-section">
          <button 
            className="send-button"
            onClick={() => window.location.href = "mailto:harshbarman015@gmail.com"}
          >
            harshbarman015@gmail.com
          </button>
        </div> 
        <div className="footer-bottom">
          <div className="footer-heading">SOCIALS</div>
          <div className="footer-links">
            <a href="mailto:harshbarman015@gmail.com" className="footer-link">Email</a>
            <a href="https://www.linkedin.com/in/harsh-08-barman/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;