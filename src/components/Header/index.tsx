'use client'
import React, { useState } from 'react';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
     
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="/">Mrigasthali</a></li>
          <li><a href="/guruMaharaj">Yogi Naraharinath</a></li>
          <li><a href="/library">Library</a></li>
        </ul>
      </nav>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.logo}>Nath Sampradaya</div>
    </header>
  );
};

export default Header;