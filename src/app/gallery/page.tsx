"use client"
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useImages } from '../../hooks/useImages'; 
import Swiper from '@/components/Swiper';
import styles from './styles.module.scss';

const GalleryPage = () => {
  
  const { images: yatra } = useImages('yatra');
  const { images: gorakh } = useImages('gorakh');
  const { images: sadhu } = useImages('sadhu');
  const { images: chakras } = useImages('chakras');
  const { images: images_1 } = useImages('images_1');
  const { images: images_2 } = useImages('images_2');
  const { images: texts } = useImages('texts');
  const { images: images_with_text } = useImages('images_with_text');

  return (
    <>
      <Header />
      <div className={styles.container} >
      <h1>Gallery</h1>
      <Swiper properties={gorakh} />
      <Swiper properties={sadhu} />
      <Swiper properties={yatra} />
      <Swiper properties={chakras} />
      <Swiper properties={images_1} />
      <Swiper properties={images_2} />
      <Swiper properties={texts} />
      <Swiper properties={images_with_text} />
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
