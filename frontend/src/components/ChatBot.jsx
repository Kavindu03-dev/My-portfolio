import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you learn more about Kavindu. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: [
      "Hello! Nice to meet you! 👋",
      "Hi there! How can I help you today?",
      "Hey! Welcome to Kavindu's portfolio! 😊"
    ],
    about: [
      "Kavindu is an AI/ML Enthusiast & Data Science Student passionate about creating innovative solutions!",
      "He's currently studying Data Science and loves working with machine learning projects.",
      "Kavindu specializes in Python, React, Java, and various AI/ML technologies."
    ],
    projects: [
      "Kavindu has worked on amazing projects like Video Game Success Prediction, Real Estate AI, and a Snake Game!",
      "Check out his projects section to see his Video Game Success Prediction with a live Streamlit demo!",
      "His portfolio includes web development, AI/ML, and game development projects."
    ],
    skills: [
      "Kavindu's skills include Python, JavaScript, React, Java, Machine Learning, Data Analysis, and more!",
      "He's proficient in AI/ML technologies like Pandas, NumPy, Scikit-learn, and Jupyter Notebooks.",
      "His tech stack covers both frontend (React, HTML, CSS) and backend (Python, Java) development."
    ],
    contact: [
      "You can reach Kavindu at Kavindu03gajanayaka@gmail.com or +94 71 587 5724",
      "Connect with him on LinkedIn, GitHub, or Instagram! Check the contact section for all links.",
      "Feel free to download his resume from the home page or contact him directly!"
    ],
    default: [
      "That's interesting! Can you tell me more about what you'd like to know?",
      "I'd be happy to help! What specific information are you looking for?",
      "Great question! Is there anything else you'd like to know about Kavindu?"
    ]
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    } else if (message.includes('about') || message.includes('who') || message.includes('kavindu')) {
      return botResponses.about[Math.floor(Math.random() * botResponses.about.length)];
    } else if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    } else if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('resume')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    } else {
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        {!isOpen && <span className="notification-dot"></span>}
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
        <div className="chat-title">
          <div className="bot-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div>
            <h3>Portfolio Assistant</h3>
            <p>Ask me about Kavindu!</p>
          </div>
        </div>
          <button 
            className="chat-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about Kavindu..."
            className="message-input"
          />
          <button 
            onClick={handleSendMessage}
            className="send-button"
            disabled={inputMessage.trim() === ''}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22,2 15,22 11,13 2,9 22,2"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
