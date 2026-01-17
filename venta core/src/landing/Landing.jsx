import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Methodology from './components/Methodology';
import TechStack from './components/TechStack';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import './Landing.css';

const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="landing">
      <motion.div
        className="global-cursor-effect"
        animate={{ x: mousePosition.x - 25, y: mousePosition.y - 25 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Methodology />
      <TechStack />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;