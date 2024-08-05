import { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { IGalleryItemProps } from './types';
import classNames from 'classnames';

const GalleryItem: FC<IGalleryItemProps> = ({ src, alt, isHalfWidth, isNotRounded }) => {
  const itemClasses = classNames(styles.galleryItem, {
    [styles.halfWidth]: isHalfWidth, 
    [styles.notRounded]: isNotRounded, 
  });

  return (
    <div className={itemClasses}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default GalleryItem;
