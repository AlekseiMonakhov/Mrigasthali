import { FC, useRef } from 'react';
import cn from 'classnames';
import { IProps } from './types';
import styles from './styles.module.scss';

export const String: FC<IProps> = ({ text, isHovered }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);


  return (
    <span
      ref={ref}
      className={cn(styles.string, isHovered && styles.is_hovered)}
    >
      
      <span ref={textRef} className={styles.text}>
        {text}
      </span>
    </span>
  );
};
