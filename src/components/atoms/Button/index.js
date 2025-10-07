import React from 'react';

import styles from './button.module.css';

const Button = ({ children, className, ...ops }) => (
  <button className={`${styles.base} ${className}`} {...ops}>
    {children}
  </button>
);

export default Button;
