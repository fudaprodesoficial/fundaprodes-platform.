import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Programs from './components/Home/Programs';
import Values from './components/Home/Values';
import CryptoSection from './components/Crypto/CryptoSection';
import Ecosystem from './components/Home/Ecosystem';
import Footer from './components/Layout/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-800">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <div id="inicio">
          <Hero />
        </div>
        
        <div id="nosotros">
          <About />
        </div>

        <div id="valores">
          <Values />
        </div>
        
        <div id="areas">
          <Programs />
        </div>

        <div id="crypto">
          <CryptoSection />
        </div>

        <div id="ecosistema">
          <Ecosystem />
        </div>
      </main>

      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
}
