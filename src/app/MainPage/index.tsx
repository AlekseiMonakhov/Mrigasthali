import React, { FC } from 'react';
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

const pageData = {
  mainTitle: 'MRIGASTHALI',
  mainPageVideoSrc: '/assets/videos/video-back.mp4',
  galleryWithCardTitle: 'Siddhachal Mrigasthali Ashram',
  galleryWithCardsItems: [
    { src: require('../../../public/assets/images/m5.png').default, title: 'Gorakshya Peeth Siddhachal Mrigasthali', subtitle: 'is located at the ancient place, loved by many siddhas over the time' },
    { src: require('../../../public/assets/images/m26.png').default, title: 'Gorakshya Peeth Mrigasthali', subtitle: 'is located inbetween Pashupatinath at North, Guheshwori at south and Gauri-Ghat at West. It is surrounded at its three sides by Bagmati river.' },
    { src: require('../../../public/assets/images/Gorakh-1.webp').default, title: 'Guru Gorakhnath', subtitle: 'is the incarnation of lord Shiva. He is also known as Shiva Gorakshya. He is the Yoga form of Lord Shiva.' },
    { src: require('../../../public/assets/images/m30.png').default, title: 'This is the place where Gorakshnath meditated', subtitle: 'Now there is a Gorakh Nath Temple and ashram with many Nath Yogis at this place.' },
  ],
  swiperTitles: {
    yatra: 'PatradevtaYatra 2024',
    gorakh: 'Gorakshanath',
  },
  donationForm: {
    title: 'Donation',
    subtitle: 'Donate to the cause of the Siddhachal Mrigasthali ashram',
  },
};

const MainPage: FC = () => {
  const { images: swiperYatra } = useImages('yatra');
  const { images: swiperGorakh } = useImages('gorakh');
  const { images: swiperSadhu } = useImages('sadhu');
  const { images: swiperTexts } = useImages('texts');
  const { images: swiperChakras } = useImages('chakras');
  const { images: swiperVarios } = useImages('images_with_text');



  return (
    <>
      <Header />
      <div className={styles.page}>
        <FullScreenVideo mainTitle={pageData.mainTitle} videoSrc={pageData.mainPageVideoSrc} />
        <Title mainTitle={pageData.galleryWithCardTitle} />
        <GalleryWithCards items={pageData.galleryWithCardsItems} />

        <Title mainTitle={pageData.swiperTitles.gorakh} />
        <Swiper properties={swiperGorakh} />
        <Title mainTitle='Sadhu' />
        <Swiper properties={swiperSadhu} />

        <Swiper properties={swiperTexts} />
        <Swiper properties={swiperChakras} />
        <Swiper properties={swiperVarios} />

        <Title mainTitle={pageData.swiperTitles.yatra} />
        <Swiper properties={swiperYatra} />


        <Title
          mainTitle={pageData.donationForm.title}
          subtitle={pageData.donationForm.subtitle}
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