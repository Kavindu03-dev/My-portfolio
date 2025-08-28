import React from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
