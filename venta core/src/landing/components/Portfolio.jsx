import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const portfolioData = [
  {
    title: 'Tienda de Moda Online',
    before: { sales: 50000, roas: 2.1 },
    after: { sales: 150000, roas: 4.8 },
    chartData: [
      { month: 'Ene', sales: 50000 },
      { month: 'Feb', sales: 60000 },
      { month: 'Mar', sales: 80000 },
      { month: 'Abr', sales: 120000 },
      { month: 'May', sales: 150000 },
    ],
  },
  {
    title: 'Ecommerce de Tecnología',
    before: { sales: 80000, roas: 1.8 },
    after: { sales: 250000, roas: 5.2 },
    chartData: [
      { month: 'Ene', sales: 80000 },
      { month: 'Feb', sales: 100000 },
      { month: 'Mar', sales: 140000 },
      { month: 'Abr', sales: 200000 },
      { month: 'May', sales: 250000 },
    ],
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Casos de Éxito
      </motion.h2>
      <div className="portfolio-grid">
        {portfolioData.map((item, index) => (
          <motion.div
            key={index}
            className="portfolio-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="mockup">
              <div className="mockup-screen">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={item.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#00ffff" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <div className="metrics">
                <div className="metric">
                  <span className="label">Ventas Antes:</span>
                  <span className="value">${item.before.sales.toLocaleString()}</span>
                </div>
                <div className="metric">
                  <span className="label">Ventas Después:</span>
                  <span className="value">${item.after.sales.toLocaleString()}</span>
                </div>
                <div className="metric">
                  <span className="label">ROAS:</span>
                  <span className="value">{item.after.roas}x</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;