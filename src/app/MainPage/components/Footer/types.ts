import { CSSProperties } from 'react';

export interface IProps {
  className?: string;
  style?: CSSProperties;
  theme?: 'light' | 'dark';
}