import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('CyJgh1dHdeoLNrrTy');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use the newer sendForm method with proper error handling
      const result = await emailjs.sendForm(
        'service_2l734vk',
        'template_bgxl8kf',
        formRef.current,
        'CyJgh1dHdeoLNrrTy'
      );

      console.log('EmailJS result:', result);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      } else {
        console.error('EmailJS returned non-200 status:', result.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.status,
        response: error.response
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get <strong>In Touch</strong></h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-form">
            <h3>Get In Touch</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="user_name"
                  placeholder="Your Name" 
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="user_email"
                  placeholder="Your Email" 
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="contact-details">
            <h3>My Contact Details</h3>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <span>Email: rahularahul0000@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>Phone: +91 9164897157</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Address: Bangalore, Karnataka<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
