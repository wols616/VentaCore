import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGoogle, FaEnvelope, FaSearch, FaBullhorn } from 'react-icons/fa';

const services = [
  { icon: <FaFacebook />, title: 'FB/IG Ads', desc: 'Campañas hiper-segmentadas que convierten visitantes en clientes.' },
  { icon: <FaGoogle />, title: 'Google Ads', desc: 'Dominamos búsquedas y shopping para maximizar tu ROI.' },
  { icon: <FaEnvelope />, title: 'Email Marketing', desc: 'Automatización que nutre leads y aumenta ventas recurrentes.' },
  { icon: <FaSearch />, title: 'SEO & CRO', desc: 'Optimizamos para que encuentren y compren en tu sitio.' },
  { icon: <FaBullhorn />, title: 'Performance Branding', desc: 'Construimos marca mientras generamos resultados medibles.' },
];

const Services = () => {
  return (
    <section className="services">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nuestros Servicios
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;