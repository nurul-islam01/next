import React from 'react';
import NavItem from '@/components/atoms/NavItem';

import Hamburger from '@/icons/hamburger.svg';
import Link from 'next/link';

import { navs } from '@/utils/constants';

import styles from './header.module.css';

export default function Header() {
  const toggleNav = () => {
    const nav = document.getElementById('nav');
    const { marginRight } = getComputedStyle(nav);
    
    if ([0, '0px'].includes(marginRight)) {
      nav.style.marginRight = '-100%';
    } else {
      nav.style.marginRight = '0px';
    }
  };

  return (
    <header className={styles['base']}>
      <div className={styles.brand}>
        <Link href="/" className={styles['bran-name']}>
          <h3 className={styles.n}>N</h3>
          <h2 className={styles['name']}>
            Nurul <span className={styles['last-name']}>Islam</span>
          </h2>
        </Link>
        <Hamburger onClick={toggleNav} className={styles.hamburger} />
      </div>
      <nav className={styles.nav} id="nav">
        <ul className={styles.ul}>
          {navs.map((nav, i) => (
            <NavItem nav={nav} key={i} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
