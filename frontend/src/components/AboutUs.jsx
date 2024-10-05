import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css"; // Import your styles

const AboutUs = () => {
  return (
    <div className="about-us-container w-full">
      <motion.div
        className="about-us-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="about-title">About Us</h1>
        <p className="about-mission">
          At <strong>HealthMetrics</strong>, our mission is to empower
          healthcare providers and administrators by providing clear,
          data-driven insights to improve patient outcomes and optimize
          operational efficiency.
        </p>
      </motion.div>

      <motion.div
        className="about-us-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="section-title">What We Do</h2>
        <ul className="about-list">
          <li>Monitor patient flow and wait times</li>
          <li>Track resource allocation and inventory management</li>
          <li>Assess treatment outcomes and trends</li>
          <li>Optimize staff performance and workload distribution</li>
          <li>Manage financial health and insurance claims</li>
        </ul>
      </motion.div>

      <motion.div
        className="about-us-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="section-title">Our Story</h2>
        <p className="about-text">
          Founded in 2020, <strong>HealthMetrics</strong> was created to address
          the growing demand for transparency and optimization in healthcare. We
          transform raw data into actionable insights, helping healthcare
          providers make faster, data-driven decisions.
        </p>
      </motion.div>

      <motion.div
        className="about-us-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="section-title">Our Team</h2>
        <p className="about-text">
          Our team of experts in healthcare, technology, and data science work
          together to design innovative tools that serve healthcare providers
          with precision and care.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
