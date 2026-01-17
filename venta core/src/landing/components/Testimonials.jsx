import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'María González',
    company: 'ModaExpress',
    message: 'Venta Core transformó nuestras ventas online. Pasamos de 50k a 150k mensuales en 3 meses.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Carlos Rodríguez',
    company: 'TechShop',
    message: 'Su estrategia de ads nos dio un ROAS de 5x. Increíble expertise en ecommerce.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Ana López',
    company: 'BellezaNatural',
    message: 'El email marketing automatizado aumentó nuestras ventas recurrentes un 300%.',
    avatar: 'https://via.placeholder.com/100',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lo que Dicen Nuestros Clientes
      </motion.h2>
      <div className="testimonial-slider">
        <button className="nav-btn" onClick={prev}><FaChevronLeft /></button>
        <div className="testimonial-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonials[current].avatar} alt={testimonials[current].name} />
              <p>"{testimonials[current].message}"</p>
              <div className="testimonial-info">
                <h4>{testimonials[current].name}</h4>
                <span>{testimonials[current].company}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="nav-btn" onClick={next}><FaChevronRight /></button>
      </div>
      <div className="indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;