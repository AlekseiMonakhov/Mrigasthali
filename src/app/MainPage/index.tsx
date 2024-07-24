import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import FullScreenVideo from './components/FullScreenVideo';
import Gallery from './components/Gallery';
import Title from './components/Title';
import Swiper from './components/Swiper';
import {Footer} from "@/app/MainPage/components/Footer";

const MainPage: FC = () => {

  const [mainTitle, setMainTitle] = useState('MRIGASTHALI');
  const [galleryTitle, setGalleryTitle] = useState('Some text we put here');
  const [swiperTitle, setSwiperTitle] = useState('Yatra 2024');
  const [reviewTitle, setReviewTitle] = useState('Some text we put here');
  const [callbackFormTitle, setCallbackFormTitle] = useState('Some text we put here');
  const [callbackFormSubtitle, setCallbackFormSubtitle] = useState('Some text we put here');
  const [propertiesTitle, setPropertiesTitle] = useState('Some text we put here');
  const [propertiesVisionTitle, setPropertiesVisionTitle] = useState('');
  const [gallery, setGallery] = useState({
    items: [
      { src: require('../MainPage/assets/images/m10.png').default, title: 'Image 1 Title', subtitle: 'Image 1 Subtitle' },
      { src: require('../MainPage/assets/images/m3.png').default, title: 'Image 2 Title', subtitle: 'Image 2 Subtitle' },
      { src: require('../MainPage/assets/images/m4.png').default, title: 'Image 3 Title', subtitle: 'Image 3 Subtitle' },
      { src: require('../MainPage/assets/images/m5.png').default, title: 'Image 4 Title', subtitle: 'Image 4 Subtitle' },
      { src: require('../MainPage/assets/images/m6.png').default, title: 'Image 5 Title', subtitle: 'Image 5 Subtitle' },
      { src: require('../MainPage/assets/images/m7.png').default, title: 'Image 6 Title', subtitle: 'Image 6 Subtitle' }
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
    <div className={styles.page}>
      <FullScreenVideo mainTitle={mainTitle} />
      <Title mainTitle={galleryTitle} />
      <Gallery items={gallery.items} />
      <Title mainTitle={swiperTitle} extended />
      <Swiper properties={swiperItems} /><Title
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
      <Footer theme="light" />
    </div>
  );
};

export default MainPage;