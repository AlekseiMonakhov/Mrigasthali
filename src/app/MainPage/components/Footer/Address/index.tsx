import { FC, useRef, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './styles.module.scss';
import { String } from './String';
import { IProps } from '../types';

export const FooterAddress: FC<IProps> = ({ className, style }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false); 
  const handleMouseEnter = () => {
    if (ref.current) {
      setIsHovered(true); 
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      setIsHovered(false); 
    }
  };

  return (
    <Link
      ref={ref}
      className={cn(className, styles.footer_address)}
      style={style}
      href="https://maps.app.goo.gl/dwpcB3qN7xTtp51P9"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <String isHovered={isHovered} text="Jl. Galiran, Beraban, Kec. Kediri," />
      <String isHovered={isHovered} text="Kabupaten Tabanan, 82121" />
      <String isHovered={isHovered} text="Bali, Indonesia" />
    </Link>
  );
};