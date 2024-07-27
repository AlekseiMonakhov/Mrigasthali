import React, { useState } from 'react';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="/">Mrigasthali</a></li>
          <li><a href="#hanuman-dhoka">Hanuman Dhoka</a></li>
        </ul>
      </nav>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;