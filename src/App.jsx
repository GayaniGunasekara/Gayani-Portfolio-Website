import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#021134] via-[#0a78a7] to-[#640234] text-[#F1F5F9]">

      <Navbar />
      <main className="container mx-auto">
        <Hero />
        <About />
        <PhotoFlow />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}
