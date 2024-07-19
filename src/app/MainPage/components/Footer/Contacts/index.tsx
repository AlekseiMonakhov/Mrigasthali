import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './styles.module.scss';
import { FooterAddress } from '../Address';
import { FooterLink } from '../Link';
import { IProps } from '../types';

export const FooterContacts: FC<IProps> = ({ className, style }) => {

  const copyright = `© ${+new Date().getFullYear()} Mrigasthali`
  return (
    <div className={cn(className, styles.footer_contacts)} style={style}>
      <FooterAddress />

      <div className={styles.contacts}>
        <div>
          {/* <ul className={styles.socials}>
            {social.map(({ key, href, name }) => (
              <li key={key}>
                <FooterLink href={href}>{name}</FooterLink>
              </li>
            ))}
          </ul> */}

          <p className={styles.phone_copyright}>{copyright}</p>
        </div>

        </div>

      <div className={styles.desktop_copyright}>
        <p>{copyright}</p>

        
      </div>
    </div>
  );
};
