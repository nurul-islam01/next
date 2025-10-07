import React from 'react';
import { string } from 'prop-types';

import styles from './skill.module.css';

const Skill = ({ skill }) => {
  return (
    <div className={styles.base}>
      <h5>{skill}</h5>
    </div>
  );
};

Skill.propTypes = {
  skill: string
};

export default Skill;
