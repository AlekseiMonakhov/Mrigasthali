import { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { CardProps } from './types';


const Card: FC<CardProps> = ({ src, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Card;
