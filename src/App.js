import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light'); // Default to light for cyber theme

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Standard smooth scroll (CSS scroll-margin-top handles the offset)
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'resume', 'about', 'services', 'contact'];
      
      // Find the section that is currently most visible
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is somewhat near the top of viewport (allowing for header offset)
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App" data-theme={theme}>
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        currentTheme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero id="home" />
        <Portfolio id="portfolio" />
        <Resume id="resume" />
        <About id="about" />
        <Services id="services" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;