import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact';
import PhotoFlow from './components/PhotoFlow'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Cerifications';
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#021134] via-[#0a78a7] to-[#640234] text-[#F1F5F9]">

      <Navbar />
      <main className="container mx-auto">
        <Hero />
        <Contact />
        <PhotoFlow />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}
