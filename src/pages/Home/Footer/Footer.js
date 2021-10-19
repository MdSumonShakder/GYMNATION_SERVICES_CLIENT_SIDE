import React from 'react';
import logo from '../../../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';


const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="all col-md-6 col-12">
            <div className="footer-logo">
              <img src={logo} alt="" />
              <p>We do not sell, share, trade your information with anyone for any reason. We won’t give spam mails.Tempora error debitis sit quas, cupiditate qui rem fugit. Voluptates quas ratione, odio ipsa itaque laboriosam eum esse. Voluptatem, tenetur deserunt.Eligendi excepturi facilis aliquam repudiandae soluta. Dolorem eveniet a, aperiam unde harum incidunt !!!</p>
            </div>

          </div>
          <div className="all col-md-6 col-12">
            <div className="tow-section">
              <div className="footer-all">
              <h5>Contact Us</h5>
              <ul>
                <li>Feel free to contact us if you have any question..
                </li>
                <li>sumonshakder1996@gmail.com</li>
                <li>Ghadgat,Shmakhile,Bagerpara,Jessore.</li>
              </ul>
            </div>
            <div className="footer-text">
                <h5>Our Services</h5>
                <ul>
                  <li>Pullup</li>
                  <li>Deadlift</li>
                  <li>Back Squat</li>
                  <li>Bench Press</li>
                  <li>Dumbbell romanian</li>
                </ul>
              </div>
            </div>


          </div> 
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><FontAwesomeIcon icon={faTwitch} /></a>
          <a href="https://www.youtube.com/channel/UCLD9CflKsqVox6JZLbKpt0Q"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </div>


  );
};

export default Footer;