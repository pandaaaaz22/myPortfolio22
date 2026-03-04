import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/rahul-a-7a737b255/" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/pandaaaaz22" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://tryhackme.com/p/pandaaaaz22" target="_blank" rel="noreferrer"><i className="fas fa-shield-alt"></i></a>
              <a href="https://leetcode.com/u/rahularahul0000/" target="_blank" rel="noreferrer"><i className="fas fa-code"></i></a>
            </div>
            <div className="footer-brand">
              <img src="/Logo22.png" alt="Logo" className="footer-logo" />
              <p>Copyright © 2026 Rahul | All rights reserved | Built with React and 💚</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
