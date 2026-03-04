import React from 'react';
import './Services.css';

const Services = ({ id }) => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development with React.js',
      description: 'Building modern, responsive web applications using React.js. Creating reusable components, managing state with hooks, implementing routing, and building scalable frontend architectures with modern JavaScript (ES6+), HTML5, and CSS3.',
      icon: 'fab fa-react'
    },
    {
      id: 2,
      title: 'C & C++ Programming',
      description: 'Strong foundation in C and C++ programming languages. Developing efficient algorithms, data structures, and system-level applications. Experience with object-oriented programming, memory management, and low-level programming concepts.',
      icon: 'fas fa-code'
    },
    {
      id: 3,
      title: 'Computer Networks',
      description: 'Comprehensive knowledge of computer networking concepts including OSI model, TCP/IP protocols, network security, routing algorithms, and network architecture. Understanding of distributed systems and network programming.',
      icon: 'fas fa-network-wired'
    },
    {
      id: 4,
      title: 'Operating Systems',
      description: 'Understanding of operating system concepts including process management, memory management, file systems, and system calls. Knowledge of Linux and Windows environments, shell scripting, and system administration basics.',
      icon: 'fas fa-desktop'
    },
    {
      id: 5,
      title: 'Data Structures & Algorithms',
      description: 'Deep understanding of fundamental data structures (arrays, linked lists, trees, graphs, heaps) and algorithms (sorting, searching, dynamic programming, graph algorithms). Implementing efficient solutions for complex computational problems.',
      icon: 'fas fa-sitemap'
    },
    {
      id: 6,
      title: 'Database Management Systems',
      description: 'Experience with relational database design, SQL queries, normalization, and database optimization. Working with MySQL, understanding ACID properties, and implementing efficient database solutions for web applications.',
      icon: 'fas fa-database'
    },
    {
      id: 7,
      title: 'Cybersecurity & CTF',
      description: 'Actively practicing offensive security via TryHackMe CTFs. Experience with network security, intrusion detection, and building security-focused tools.',
      icon: 'fas fa-shield-alt'
    }
  ];

  return (
    <section id={id} className="services">
      <div className="container">
        <div className="section-header">
          <h2>What <strong>I Do</strong></h2>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-item">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
