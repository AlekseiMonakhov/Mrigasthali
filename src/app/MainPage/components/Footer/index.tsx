import { forwardRef, memo, useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { FooterContacts } from './Contacts';
import vevet from 'vevet'; 
import { IProps } from './types';

const Component = forwardRef<HTMLDivElement, IProps>(
  ({ className, style, theme = 'light' }, forwardedRef) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleResize = () => {
        if (ref.current) {
          const clientHeight = ref.current.clientHeight;
         
      };
    }
      handleResize(); 
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize); 
      };
    }, []);

    return (
      <footer
        ref={ref}
        className={cn(styles.footer, className, styles[`theme_${theme}`])}
        style={style}
      >
        <div className={styles.container}>
          <FooterContacts />
        </div>
      </footer>
    );
  },
);

Component.displayName = 'Footer';

export const Footer = memo(Component);