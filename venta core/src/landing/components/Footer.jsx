import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Venta Core</h3>
          <p>Impulsando Ecommerce que Venden</p>
        </motion.div>
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#services">Servicios</a>
          <a href="#portfolio">Portafolio</a>
          <a href="#contact">Contacto</a>
        </motion.div>
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </motion.div>
      </div>
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p>&copy; 2026 Venta Core. Todos los derechos reservados.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;