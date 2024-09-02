import React, { FC, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import styles from './styles.module.scss'; 
import { IProperty } from './types';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Props {
  properties: IProperty[]; 
}

const Swiper: FC<Props> = ({ properties }) => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false, 
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevSlide} className={styles.prevButton}>‹</button>
      
      <Slider ref={sliderRef} {...settings} className={styles.slider}>
        {properties.map((property: IProperty) => (
          <div key={property.src}>
            <img
              src={property.src}
              alt={property.title}
              loading="lazy"
              style={{ width: '100%', height:'100%' }}
            />
          </div>
        ))}
      </Slider>

      <button onClick={nextSlide} className={styles.nextButton}>›</button>
    </div>
  );
};

export default Swiper;
