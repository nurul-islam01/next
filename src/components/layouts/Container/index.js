import React from 'react';
import { node } from 'prop-types';
import { Poppins } from 'next/font/google';

import Header from '@/components/layouts/Header';
import Title from '@/components/layouts/Title';
import Footer from '@/components/layouts/Footer';

import { useBgMove } from '@/utils/hooks';

import styles from './container.module.css';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap'
});

const Container = ({ children }) => {
  useBgMove('background');

  return (
    <main className={poppins.className}>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=G-RW7YS6YY4Q"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <Title />
      <div className={styles.background} id="background" />
      <div className={styles.base}>
        <Header />
        <>{children}</>
        <Footer />
      </div>
    </main>
  );
};

Container.propTypes = {
  children: node
};

export default Container;
