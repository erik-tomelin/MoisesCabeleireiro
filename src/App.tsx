import React, { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Transform from './components/sections/Transform'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header
        onNavClick={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          services: () => scrollToSection(servicesRef),
          testimonials: () => scrollToSection(testimonialsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      <div ref={homeRef} className="scroll-mt-28">
        <Hero />
      </div>

      <div ref={aboutRef} className="scroll-mt-28">
        <About />
      </div>

      <div className="scroll-mt-28">
        <Transform />
      </div>

      <div ref={servicesRef} className="scroll-mt-28">
        <Services />
      </div>

      <div ref={testimonialsRef} className="scroll-mt-28">
        <Testimonials />
      </div>

      <div ref={contactRef} className="scroll-mt-28">
        <Contact />
      </div>

      <Footer
        onNavClick={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          services: () => scrollToSection(servicesRef),
          testimonials: () => scrollToSection(testimonialsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
    </div>
  )
}

export default App
