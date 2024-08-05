import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import FullScreenVideo from '../../components/FullScreenVideo';
import GalleryWithCards from '../../components/GalleryWithCards';
import Title from '../../components/Title';
import Swiper from '../../components/Swiper';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import BankQR from '../../../public/assets/qr/bank-qr.jpg';
import { useImages } from '../../hooks/useImages';

import '../globals.scss'; 
import Gallery from '@/components/Gallery ';

const MainPage: FC = () => {
  const [mainTitle, setMainTitle] = useState('MRIGASTHALI');
  
  const [mainPageVideoSrc, setMainPageVideoSrc] = useState('/assets/videos/video-back.mp4');
  const [galleryTitle, setGalleryTitle] = useState('Om Shiv Gorakh');
  const [galleryItems, setGalleryItems] = useState ({
    items: [
      { src: require('../../../public/assets/Gorakshanath/FB_IMG_17221779561109411.jpg').default},
      { src: require('../../../public/assets/Gorakshanath/IMG_0006.jpg').default},
      { src: require('../../../public/assets/Gorakshanath/FB_IMG_17216324868483889.jpg').default},
     
     
    ]
  })
 
  const [galleryWithCardTitle, setGalleryWithCardTitle] = useState('Siddhachal Mrigasthali Ashram');
  const [galleryWithCardsItems, setGalleryWithCardsItems] = useState({
    items: [
      { src: require('../MainPage/assets/images/m5.png').default, title: 'Gorakshya Peeth Siddhachal Mrigasthali', subtitle: 'is located at the ancient place, loved by many siddhas over the time' },
      { src: require('../MainPage/assets/images/m26.png').default, title: 'Gorakshya Peeth Mrigasthali', subtitle: `is located inbetween Pashupatinath at North, Guheshwori at south and Gauri-Ghat at West. It is surrounded at its three sides by Bagmati river.` },
      { src: require('../MainPage/assets/images/Gorakh-1.webp').default, title: 'Guru Gorakhnath', subtitle: ' is the incarnation of lord Shiva. He is also known as Shiva Gorakshya. He is the Yoga form of Lord Shiva.' },
      { src: require('../MainPage/assets/images/m30.png').default, title: 'This is the place where Gorakshnath meditated', subtitle: 'Now there is a Gorakh Nath Temple and ashram with many Nath Yogis at this place.' },
    ]
  });
  const [swiperTitle, setSwiperTitle] = useState('Yatra 2024');
  const { images: swiperItems, loading, error } = useImages('yatra');
  const [donationFormTitle, setdonationFormTitle] = useState('Donation');
  const [donationFormSubtitle, setdonationFormSubtitle] = useState('Donate to the cause of the Siddhachal Mrigasthali ashram');
 
  


  return (
    <>
      <Header />
      <div className={styles.page}>
        <FullScreenVideo mainTitle={mainTitle} videoSrc={mainPageVideoSrc} />
        <Title mainTitle={galleryTitle} />
        <Gallery items={galleryItems.items} />
        <Title mainTitle={galleryWithCardTitle} />
        <GalleryWithCards items={galleryWithCardsItems.items} />
        <Title mainTitle={swiperTitle} extended />
        {loading ? (
          <div>Downloading...</div>
        ) : error ? (
          <div>
            <p>Downloading Error</p>
            <Swiper properties={[]} />
          </div>
        ) : (
          <Swiper properties={swiperItems} />
        )}
        <Title
          mainTitle={donationFormTitle}
          subtitle={donationFormSubtitle}
          extended
          wide
        />
        <div className={styles.donation}>
          <Image src={BankQR} alt="Donation" width={300} height={350} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;