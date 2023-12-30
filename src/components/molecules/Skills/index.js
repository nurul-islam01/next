import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';

import styles from './skills.module.css';
import Skill from '@/components/atoms/Skill';

const skills = [
  'Javascript',
  'TypeScript',
  'React',
  'Next.js',
  'Angular',
  'React isomorphic',
  'Redux',
  'Material Design',
  'Tailwind css',
  'Micro services',
  'ReduxThunk',
  'Progressive Web Apps',
  'Frontend Caching',
  'Offline Capabilities',
  'SEO',
  'GraphQL',
  'Express',
  'Restfull Api',
  'Backend Caching',
  'Push Notification',
  'Redis',
  'Docker',
  'Github',
  'Github CICD',
  'CircleCI',
  'Java',
  'Android',
  'SQL',
  'MongoDB',
  'Firebase',
  'HTML5',
  'CSS',
  'SCSS',
  'SASS',
  'Bootstrap',
  'Jquery',
  'Three.js'
];

const Skills = () => {
  return (
    <section className={styles.base}>
      <SectionTitle title="Coding Skills" />
      <div className={styles.skills}>
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
