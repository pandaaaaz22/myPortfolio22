import React from 'react';
import './About.css';

const About = ({ id }) => {
  const handleDownloadCV = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Path to your resume in public folder
    link.download = 'Rahul_A_Resume.pdf'; // Name of the downloaded file
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>About <strong>Me</strong></h2>
            </div>
            <p>
              I am a passionate Computer Science student pursuing B.Tech at University of Visvesvaraya 
              College of Engineering. With expertise in C/C++, React.js, and web development, I am 
              particularly interested in the cybersecurity field.
            </p>
            <p>
              My strong foundation in programming, data structures, algorithms, and computer networks 
              provides me with the skills to develop secure applications and explore network security concepts.
            </p>
            <p>"Actively practicing offensive security and CTF challenges on TryHackMe."</p>
            
            <div className="about-buttons">
              <a href="https://tryhackme.com/p/pandaaaaz22" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://tryhackme-badges.s3.amazonaws.com/pandaaaaz22.png"
                  alt="TryHackMe Badge"
                  style={{ border: '1px solid var(--primary-color)', height: '60px' }}
                />
              </a>
              <button className="btn btn-secondary" onClick={handleDownloadCV}>
                <i className="fas fa-download"></i> Download CV
              </button>
            </div>
          </div>
          <div className="about-image">
            <img src="/My_Photo.jpg" alt="Rahul - About Me" className="about-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
