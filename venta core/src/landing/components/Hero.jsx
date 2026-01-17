import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
      </div>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Impulsamos Ecommerce que <span className="highlight">Venden</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transformamos tu tienda online en una máquina de ventas con estrategias de marketing digital probadas y métricas que importan.
        </motion.p>
        <motion.button
          className="cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Agenda tu Diagnóstico Gratuito <FaArrowRight />
        </motion.button>
      </div>
      <div className="dashboard-preview">
        <motion.img
          src="/logoVentaCore.png"
          alt="Venta Core Logo"
          className="dashboard-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default Hero;