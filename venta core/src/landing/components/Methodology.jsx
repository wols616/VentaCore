import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFlask, FaRocket, FaHeart } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch />, title: 'Discovery', desc: 'Analizamos tu ecommerce actual, audiencias y competencia.' },
  { icon: <FaFlask />, title: 'Testing', desc: 'Creamos y probamos hipótesis con campañas de bajo riesgo.' },
  { icon: <FaRocket />, title: 'Scaling', desc: 'Escalamos lo que funciona para maximizar resultados.' },
  { icon: <FaHeart />, title: 'Retention', desc: 'Optimizamos para retención y ventas recurrentes.' },
];

const Methodology = () => {
  return (
    <section className="methodology">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nuestra Metodología
      </motion.h2>
      <div className="methodology-flow">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="methodology-step"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {index < steps.length - 1 && <div className="arrow">→</div>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;