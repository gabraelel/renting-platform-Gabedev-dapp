import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './AnimationTitles.css'; // Optional: If you have specific styles

function AnimationTitles({ title, className }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {title.split('').map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

AnimationTitles.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

AnimationTitles.defaultProps = {
  className: '',
};

export default AnimationTitles;
