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
  const [swiperTitle, setSwiperTitle] = useState('Some text we put here');
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
    { src: require('../MainPage/assets/images/m11.png').default, alt: 'Swiper Image 1', title: 'Swiper Image 1 Title' },
    { src: require('../MainPage/assets/images/m8.png').default, alt: 'Swiper Image 2', title: 'Swiper Image 2 Title' },
    { src: require('../MainPage/assets/images/m9.png').default, alt: 'Swiper Image 3', title: 'Swiper Image 3 Title' }
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