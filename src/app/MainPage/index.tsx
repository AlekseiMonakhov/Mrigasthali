import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import FullScreenVideo from './components/FullScreenVideo';
import Gallery from './components/Gallery';
import Title from './components/Title';
import Swiper from './components/Swiper';
import Header from './components/Header';
import Footer from './components/Footer';

const MainPage: FC = () => {

  const [mainTitle, setMainTitle] = useState('MRIGASTHALI');
  const [galleryTitle, setGalleryTitle] = useState('Gorakhnath Math');
  const [swiperTitle, setSwiperTitle] = useState('Yatra 2024');
  const [reviewTitle, setReviewTitle] = useState('Some text we put here');
  const [callbackFormTitle, setCallbackFormTitle] = useState('Some text we put here');
  const [callbackFormSubtitle, setCallbackFormSubtitle] = useState('Some text we put here');
  const [propertiesTitle, setPropertiesTitle] = useState('Some text we put here');
  const [propertiesVisionTitle, setPropertiesVisionTitle] = useState('');
  const [gallery, setGallery] = useState({
    items: [
      { src: require('../MainPage/assets/images/m5.png').default, title: 'Gorakshya Peeth Siddhachal Mrigasthali', subtitle: 'is located at the ancient place, loved by many siddhas over the time' },
      { src: require('../MainPage/assets/images/m26.png').default, title: 'Gorakshya Peeth Mrigasthali', subtitle: `is located inbetween Pashupatinath at North, Guheshwori at south and Gauri-Ghat at West. It is surrounded at its three sides by Bagmati river.` },
      { src: require('../MainPage/assets/images/Gorakh-1.webp').default, title: 'Guru Gorakhnath', subtitle: ' is the incarnation of lord Shiva. He is also known as Shiva Gorakshya. He is the Yoga form of Lord Shiva.' },
      { src: require('../MainPage/assets/images/m30.png').default, title: 'This is the place where Gorakshnath meditated', subtitle: 'Now there is a Gorakh Nath Temple and ashram with many Nath Yogis at this place.' },
    ]
  });
  const [swiperItems, setSwiperItems] = useState([
    { src: require('../MainPage/assets/yatra/1.png').default, alt: 'Swiper Image 1', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/2.png').default, alt: 'Swiper Image 2', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/3.png').default, alt: 'Swiper Image 3', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/4.png').default, alt: 'Swiper Image 4', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/5.png').default, alt: 'Swiper Image 5', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/6.png').default, alt: 'Swiper Image 6', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/7.png').default, alt: 'Swiper Image 7', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/8.png').default, alt: 'Swiper Image 8', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/9.png').default, alt: 'Swiper Image 9', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/10.png').default, alt: 'Swiper Image 10', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/11.png').default, alt: 'Swiper Image 11', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/12.png').default, alt: 'Swiper Image 12', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/13.png').default, alt: 'Swiper Image 13', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/14.png').default, alt: 'Swiper Image 14', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/15.png').default, alt: 'Swiper Image 15', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/16.png').default, alt: 'Swiper Image 16', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/17.png').default, alt: 'Swiper Image 17', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/18.png').default, alt: 'Swiper Image 18', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/19.png').default, alt: 'Swiper Image 19', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/20.png').default, alt: 'Swiper Image 20', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/21.png').default, alt: 'Swiper Image 21', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/22.png').default, alt: 'Swiper Image 22', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/23.png').default, alt: 'Swiper Image 23', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/24.png').default, alt: 'Swiper Image 24', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/25.png').default, alt: 'Swiper Image 25', title: 'Yatra 2024' },
    { src: require('../MainPage/assets/yatra/26.png').default, alt: 'Swiper Image 26', title: 'Yatra 2024' },
  ]);



  return (
    <>
      <Header />
      <div className={styles.page}>
        <FullScreenVideo mainTitle={mainTitle} />
        <Title mainTitle={galleryTitle} />
        <Gallery items={gallery.items} />
        <Title mainTitle={swiperTitle} extended />
        <Swiper properties={swiperItems} />
      
        <Title
          extended
          mainTitle={propertiesTitle}
          visionTitle={propertiesVisionTitle}
        />
        <Title mainTitle={reviewTitle} extended wide />
        <Title
          mainTitle={callbackFormTitle}
          subtitle={callbackFormSubtitle}
          extended
          wide
        />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;