import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';
import '../globals.scss';

const FullScreenVideo = dynamic(() => import('../../components/FullScreenVideo'));
const GalleryWithCards = dynamic(() => import('../../components/GalleryWithCards'));
const Title = dynamic(() => import('../../components/Title'));
const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));
const Donation = dynamic(() => import('../../components/Donation'), {
  ssr: false
});

const pageData = {
  mainTitle: 'MRIGASTHALI',
  mainPageVideoSrc: '/assets/videos/videoback.mp4',
  galleryWithCardTitle: 'Siddhachal Mrigasthali Ashram',
  galleryWithCardsItems: [
    { src: require('../../../public/assets/images/m5.png').default, title: 'Gorakshya Peeth Siddhachal Mrigasthali', subtitle: 'is located at the ancient place, loved by many siddhas over the time' },
    { src: require('../../../public/assets/images/m26.png').default, title: 'Gorakshya Peeth Mrigasthali', subtitle: 'is located inbetween Pashupatinath at North, Guheshwori at south and Gauri-Ghat at West. It is surrounded at its three sides by Bagmati river.' },
    { src: require('../../../public/assets/images/Gorakh-1.webp').default, title: 'Guru Gorakhnath', subtitle: 'is the incarnation of lord Shiva. He is also known as Shiva Gorakshya. He is the Yoga form of Lord Shiva.' },
    { src: require('../../../public/assets/images/m30.png').default, title: 'This is the place where Gorakshnath meditated', subtitle: 'Now there is a Gorakh Nath Temple and ashram with many Nath Yogis at this place.' },
  ],
};

const MainPage: FC = () => {
 
  return (
    <>
      <Header />
      <div className={styles.page}>
        <FullScreenVideo mainTitle={pageData.mainTitle} videoSrc={pageData.mainPageVideoSrc} />
        <Title mainTitle={pageData.galleryWithCardTitle} />
        <GalleryWithCards items={pageData.galleryWithCardsItems} />
        <Donation /> 
      </div>
      <Footer />
    </>
  );
};

export default MainPage;