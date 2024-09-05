'use client'
import React, { FC } from 'react';
import styles from './styles.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import Swiper from '@/components/Swiper';
import { useImages } from '@/hooks/useImages';



const GuruMaharajPage: FC = () => {
  const { images: swiperNaraharinath } = useImages('Naraharinath');
  return (
    <>
      <Header />
      <div className={styles.container}>
      <Title mainTitle='Guru Yogi Naraharinath Maharaj' />
      <Swiper properties={swiperNaraharinath} />
      </div>
      <Footer />
    </>
  );
};

export default GuruMaharajPage;