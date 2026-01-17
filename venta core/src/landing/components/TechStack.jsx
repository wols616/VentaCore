import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGoogle, FaShopify, FaChartLine } from 'react-icons/fa';

const tools = [
  { icon: <FaFacebook />, name: 'Meta Ads' },
  { icon: <FaGoogle />, name: 'Google Ads' },
  { icon: <FaShopify />, name: 'Shopify' },
  { icon: <FaChartLine />, name: 'GA4' },
  // Add more as needed
];

const TechStack = () => {
  return (
    <section className="tech-stack">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Stack Tecnológico
      </motion.h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="tool-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="tool-icon">{tool.icon}</div>
            <span>{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;