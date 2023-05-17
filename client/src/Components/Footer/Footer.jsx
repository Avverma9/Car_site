import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation()
    if (location.pathname !== '/sell') {
        return null;
      }
  return (
    <div className="card-footer">
      <footer className="footer">
        <div className="footer-background">
          <div className="footer-content">
            <h5 className="footer-heading">
              WE SEND GREAT DEALS AND LATES AUTO NEWS TO OUR SUBSCRIBED USERS 
            </h5>
            <div className="footer-form">
              <input
                type="text"
                className="footer-input"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="footer-input"
                placeholder="Your Email"
              />
              <button className="footer-button">Subscribe</button>
             
            </div> 
          </div>
        </div>
        <div className='second-image'>
        <img src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684300856239-Untitled.jpg" alt="" />
        </div>
        <div className='third-image'>
        <img src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684301731905-Untitled.jpg" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
