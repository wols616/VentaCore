import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaChartBar, FaUsers, FaRocket } from 'react-icons/fa';

const benefits = [
  { icon: <FaTrophy />, title: 'Resultados Probados', desc: 'Más de 500 ecommerce han aumentado sus ventas con nosotros.' },
  { icon: <FaChartBar />, title: 'Métricas Transparente', desc: 'Reportes en tiempo real y dashboards personalizados.' },
  { icon: <FaUsers />, title: 'Equipo Experto', desc: 'Especialistas certificados en plataformas líderes.' },
  { icon: <FaRocket />, title: 'Escalabilidad', desc: 'Estrategias que crecen con tu negocio.' },
];

const WhyUs = () => {
  return (
    <section className="why-us">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Por Qué Elegirnos
      </motion.h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="benefit-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;