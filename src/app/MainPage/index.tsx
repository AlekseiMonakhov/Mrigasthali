import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import FullScreenVideo from '../../components/FullScreenVideo';
import Gallery from '../../components/Gallery';
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
  const [galleryTitle, setGalleryTitle] = useState('Gorakhnath Math');
  const [swiperTitle, setSwiperTitle] = useState('Yatra 2024');
  const [donationFormTitle, setdonationFormTitle] = useState('Donation');
  const [donationFormSubtitle, setdonationFormSubtitle] = useState('Donate to the cause of the Siddhachal Mrigasthali ashram');
  const [gallery, setGallery] = useState({
    items: [
      { src: require('../MainPage/assets/images/m5.png').default, title: 'Gorakshya Peeth Siddhachal Mrigasthali', subtitle: 'is located at the ancient place, loved by many siddhas over the time' },
      { src: require('../MainPage/assets/images/m26.png').default, title: 'Gorakshya Peeth Mrigasthali', subtitle: `is located inbetween Pashupatinath at North, Guheshwori at south and Gauri-Ghat at West. It is surrounded at its three sides by Bagmati river.` },
      { src: require('../MainPage/assets/images/Gorakh-1.webp').default, title: 'Guru Gorakhnath', subtitle: ' is the incarnation of lord Shiva. He is also known as Shiva Gorakshya. He is the Yoga form of Lord Shiva.' },
      { src: require('../MainPage/assets/images/m30.png').default, title: 'This is the place where Gorakshnath meditated', subtitle: 'Now there is a Gorakh Nath Temple and ashram with many Nath Yogis at this place.' },
    ]
  });
  const { images: swiperItems, loading, error } = useImages('yatra');

  return (
    <>
      <Header />
      <div className={styles.page}>
        <FullScreenVideo mainTitle={mainTitle} />
        <Title mainTitle={galleryTitle} />
        <Gallery items={gallery.items} />
        <Title mainTitle={swiperTitle} extended />
        {loading ? (
          <div>Загрузка изображений...</div>
        ) : error ? (
          <div>
            <p>Произошла ошибка при загрузке изображений для свайпера.</p>
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