import React from 'react'
import { Carousel } from 'react-responsive-carousel';

// scss
import styles from './MobileBento.module.scss';

//img
import carouselItem1 from '../../assets/Carousel/carousel1.png'
import carouselItem2 from '../../assets/Carousel/carousel2.png'
import carouselItem3 from '../../assets/Carousel/carousel3.png'
import carouselItem4 from '../../assets/Carousel/carousel4.png'
import carouselItem5 from '../../assets/Carousel/carousel5.png'


const MobileBento = () => {
  return (
    <div className={styles.container}>
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        emulateTouch
        centerSlidePercentage={120}
        centerMode
      >
        <div className={styles.carouselItem}>
          <img src={carouselItem1} alt="" />
        </div>
        <div className={styles.carouselItem}>
          <img src={carouselItem2} alt="" />
        </div>
        <div className={styles.carouselItem}>
          <img src={carouselItem3} alt="" />
        </div>
        <div className={styles.carouselItem}>
          <img src={carouselItem4} alt="" />
        </div>
        <div className={styles.carouselItem}>
          <img src={carouselItem5} alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default MobileBento
