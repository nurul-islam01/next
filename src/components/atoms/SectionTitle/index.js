import React from 'react';

import styles from './section-title.module.css';

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
