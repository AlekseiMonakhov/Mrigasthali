"use client"
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useImages } from '../../hooks/useImages'; 
import Swiper from '@/components/Swiper';
import Title from '@/components/Title';
import styles from './styles.module.scss';

const GalleryPage = () => {
  
  const { images: swiperYatra, loadMore: loadMoreYatra, hasMore: hasMoreYatra } = useImages('yatra');
  const { images: swiperGorakh, loadMore: loadMoreGorakh, hasMore: hasMoreGorakh } = useImages('gorakh');
  const { images: swiperSadhu, loadMore: loadMoreSadhu, hasMore: hasMoreSadhu } = useImages('sadhu');
  const { images: swiperChakras, loadMore: loadMoreChakras, hasMore: hasMoreChakras } = useImages('chakras');

  return (
    <>
      <Header />
      <div className={styles.container} >
      <Title mainTitle='Gorakshanath' />
      <Swiper properties={swiperGorakh} loadMore={loadMoreGorakh} hasMore={hasMoreGorakh} />
      <Title mainTitle='Sadhu' />
      <Swiper properties={swiperSadhu} loadMore={loadMoreSadhu} hasMore={hasMoreSadhu} />
      <Title mainTitle='PatradevtaYatra 2024' />
      <Swiper properties={swiperYatra} loadMore={loadMoreYatra} hasMore={hasMoreYatra} />
      <Swiper properties={swiperChakras} loadMore={loadMoreChakras} hasMore={hasMoreChakras} />
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
