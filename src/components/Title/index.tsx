import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({
  mainTitle,
  visionTitle,
  subtitle,
  extended,
  wide,
}) => (
  <div className={styles.titleContainer}>
    <h2
      className={cn(
        styles.mainTitle,
        extended && styles.extended,
        wide && styles.wide,
      )}
    >
      {mainTitle}   </h2>
    {visionTitle && (
      <h2 className={cn(styles.mainTitle, styles.visionTitle)}>
        {visionTitle}
      </h2>
    )}
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>
);

export default Title;