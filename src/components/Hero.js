import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import HackerBackground from './HackerBackground'; 

const Hero = ({ id }) => {
  // --- Main Title Typing Effect ---
  const [titleText, setTitleText] = useState('');
  const fullTitle = "System.init(User: Rahul_A)";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTitleText(fullTitle.slice(0, index));
      index++;
      if (index > fullTitle.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // --- Terminal Logic ---
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Rahul OS v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  
  // FIX: Ref for the container, not a dummy element
  const terminalBodyRef = useRef(null);

  // FIX: Auto-scroll logic using scrollTop instead of scrollIntoView
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]); // Runs whenever history updates

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response = '';

    const scrollTo = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return `Navigating to ${id}...`;
      }
      return `Error: Section #${id} not found.`;
    };

    switch (cleanCmd) {
      case 'help':
        response = 
          `Available commands:
  - about       : Go to About section
  - projects    : View Portfolio
  - contact     : Go to Contact section
  - resume      : Download CV
  - whoami      : Display user info
  - clear       : Clear terminal
  - ls          : List sections`;
        break;

      case 'about':
        response = scrollTo('about');
        break;

      case 'projects':
      case 'portfolio':
        response = scrollTo('portfolio');
        break;

      case 'services':
      case 'expertise':
        response = scrollTo('services');
        break;

      case 'contact':
      case 'email':
        response = scrollTo('contact');
        break;

      case 'resume':
        const link = document.createElement('a');
        link.href = '/Resume.pdf';
        link.download = 'Rahul_A_Resume.pdf';
        link.click();
        response = 'Downloading resume...';
        break;

      case 'whoami':
        response = 'User: Rahul A | Education: B.Tech in Computer Science | Interests: Cybersecurity & Space Exploration';
        break;

      case 'ls':
        response = 'about/  portfolio/  resume.pdf  contact/  services/';
        break;
      
      case 'clear':
        setHistory([]);
        return;

      case '':
        response = '';
        break;

      default:
        response = `Command not found: ${cleanCmd}. Type "help" for list.`;
    }

    setHistory(prev => [
      ...prev, 
      { type: 'command', content: cmd }, 
      { type: 'output', content: response }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  const handleViewWork = () => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Rahul_A_Resume.pdf';
    link.click();
  };

  return (
    <section id={id} className="hero">
      <HackerBackground />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="typing-text">{titleText}</span>
              <span className="cursor">_</span>
            </h1>
            <p>
              Hey, I'm Rahul A. I am a passionate Frontend Dev, 
              solving problems with code and securing systems with cybersecurity knowledge.
              Welcome to my digital command center.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleViewWork}>
                <i className="fas fa-eye"></i> View My Work
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadCV}>
                <i className="fas fa-download"></i> Download CV
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="terminal-window" onClick={() => document.getElementById('terminalInput')?.focus()}>
              <div className="terminal-header">
                <div className="terminal-btn red"></div>
                <div className="terminal-btn yellow"></div>
                <div className="terminal-btn green"></div>
                <div className="terminal-title">user@rahul-portfolio: ~ (Interactive)</div>
              </div>
              
              {/* FIX: Added ref here to control scrolling of this specific container */}
              <div className="terminal-body" ref={terminalBodyRef}>
                {history.map((item, index) => (
                  <div key={index} className={`terminal-line ${item.type}`}>
                    {item.type === 'command' ? (
                      <>
                        <span className="prompt">user@RahulA:~$</span>
                        <span className="cmd">{item.content}</span>
                      </>
                    ) : (
                      <span className="output">{item.content}</span>
                    )}
                  </div>
                ))}

                <div className="terminal-line input-line">
                  <span className="prompt">user@RahulA:~$</span>
                  <input 
                    id="terminalInput"
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    autoFocus
                  />
                  {input === '' && <span className="cursor-block">█</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;