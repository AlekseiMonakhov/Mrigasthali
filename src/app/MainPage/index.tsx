import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './styles.module.scss';
import { useImages } from '../../hooks/useImages';
import '../globals.scss';
import BankQR from '../../../public/assets/qr/bank-qr.jpg';

const FullScreenVideo = dynamic(() => import('../../components/FullScreenVideo'));
const GalleryWithCards = dynamic(() => import('../../components/GalleryWithCards'));
const Title = dynamic(() => import('../../components/Title'));
const Swiper = dynamic(() => import('../../components/Swiper'));
const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));

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
    title: '',
    subtitle: 'You can make donations for the needs of our ashram',
  },
};

const MainPage: FC = () => {
 
  return (
    <>
      <Header />
      <div className={styles.page}>
        <FullScreenVideo mainTitle={pageData.mainTitle} videoSrc={pageData.mainPageVideoSrc} />
        <Title mainTitle={pageData.galleryWithCardTitle} />
        <GalleryWithCards items={pageData.galleryWithCardsItems} />

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