import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';

import styles from './pricing.module.css';

const Pricing = () => {
  return (
    <section className={styles.base}>
      <SectionTitle title="Pricing" />
      <p className={styles.letter}>
        I&apos;m excited to have you here. As a gesture of appreciation for your
        interest and as a way to showcase my skills, I&apos;m offering the first
        click project for free! Yes, you read that right - your initial project
        won&apos;t cost you a dime.
        <br />
        <br />
        I believe in the power of the first impression, and I want to make sure
        your experience with my work is not only impressive but also risk-free.
        This is my way of saying thank you for considering me for your project.
        <br />
        <br />
        Feel free to reach out, and let&apos;s discuss how we can bring your
        ideas to life. I can&apos;t wait to get started on this journey with
        you!
      </p>
    </section>
  );
};

export default Pricing;
