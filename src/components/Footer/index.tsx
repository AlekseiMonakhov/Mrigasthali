import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import FbIcon from '../../../public/assets/icons/fb.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <p>Email: siddhachal.mrigasthali@gmail.com</p>
          <p>Phone: +977 985-1027163</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Social media</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/GuruGorakhnath984?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <Image src={FbIcon} alt="Facebook" width={34} height={34} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Mrigasthali. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;