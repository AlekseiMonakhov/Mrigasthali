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

const MainPage: FC = () => {
  const [mainTitle, setMainTitle] = useState('MRIGASTHALI');
  
  const [mainPageVideoSrc, setMainPageVideoSrc] = useState('/assets/videos/video-back.mp4'); 
  const [galleryWithCardTitle, setGalleryWithCardTitle] = useState('Siddhachal Mrigasthali Ashram');
  const [galleryWithCardsItems, setGalleryWithCardsItems] = useState({
    items: [
      { src: require('../../../public/assets/images/m5.png').default, title: 'Gorakshya Peeth Siddhachal Mrigasthali', subtitle: 'is located at the ancient place, loved by many siddhas over the time' },
      { src: require('../../../public/assets/images/m26.png').default, title: 'Gorakshya Peeth Mrigasthali', subtitle: `is located inbetween Pashupatinath at North, Guheshwori at south and Gauri-Ghat at West. It is surrounded at its three sides by Bagmati river.` },
      { src: require('../../../public/assets/images/Gorakh-1.webp').default, title: 'Guru Gorakhnath', subtitle: ' is the incarnation of lord Shiva. He is also known as Shiva Gorakshya. He is the Yoga form of Lord Shiva.' },
      { src: require('../../../public/assets/images/m30.png').default, title: 'This is the place where Gorakshnath meditated', subtitle: 'Now there is a Gorakh Nath Temple and ashram with many Nath Yogis at this place.' },
    ]
  });
  const [swiperTitle, setSwiperTitle] = useState('Yatra 2024');
  const { images: swiperItemsYatra, loading: loadingYatra, error: errorYatra } = useImages('yatra');
  const [swiperTitle1, setSwiperTitle1] = useState('Gorakshanath');
  const { images: swiperItemsGorakshanath, loading: loadingGorakshanath, error: errorGorakshanath } = useImages('Gorakshanath');
  const [swiperTitle2, setSwiperTitle2] = useState('gorakh');
  const { images: swiperItemGorakh, loading: loadingGorakh, error: errorGorakh } = useImages('gorakh');
  const [donationFormTitle, setdonationFormTitle] = useState('Donation');
  const [donationFormSubtitle, setdonationFormSubtitle] = useState('Donate to the cause of the Siddhachal Mrigasthali ashram');


  return (
    <>
      <Header />
      <div className={styles.page}>
        <FullScreenVideo mainTitle={mainTitle} videoSrc={mainPageVideoSrc} />
        <Title mainTitle={galleryWithCardTitle} />
        <GalleryWithCards items={galleryWithCardsItems.items} />

        <Title mainTitle={swiperTitle1} />
        <Swiper properties={swiperItemsGorakshanath} />
        <Swiper properties={swiperItemGorakh} />
        <Title mainTitle={swiperTitle} />
        <Swiper properties={swiperItemsYatra} />
        
        

        <Title
          mainTitle={donationFormTitle}
          subtitle={donationFormSubtitle}
          extended
          wide
        />
        <div className={styles.donation}>
          <Image src={BankQR} alt="Donation" width={200} height={250} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;