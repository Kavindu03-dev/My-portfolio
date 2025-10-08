import React from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ChatBot from './components/ChatBot'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Header />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <ChatBot />
    </div>
  )
}

export default App
