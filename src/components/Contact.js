import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_8ned73b',      // replace this
      'template_aud6i2u',     // replace this
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'CyJgh1dHdeoLNrrTy'       // replace this
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <section id={id} className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In <strong>Touch</strong></h2>
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <h3>Send Message</h3>

            {status === 'success' && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i> Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> Failed to send. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending'
                  ? <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                  : <><i className="fas fa-paper-plane"></i> Send Message</>
                }
              </button>
            </form>
          </div>

          <div className="contact-details">
            <h3>My Contact Details</h3>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <span>rahularahul0000@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+91 9164897157</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Bangalore, Karnataka, India</span>
              </li>
              <li>
                <i className="fab fa-github"></i>
                <span><a href="https://github.com/pandaaaaz22" target="_blank" rel="noreferrer">github.com/pandaaaaz22</a></span>
              </li>
              <li>
                <i className="fas fa-shield-alt"></i>
                <span><a href="https://tryhackme.com/p/pandaaaaz22" target="_blank" rel="noreferrer">tryhackme.com/p/pandaaaaz22</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;