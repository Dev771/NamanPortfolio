//custom
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Stickers from '../Stickers/Stickers';

// scss
import styles from './Bento.module.scss';

// img
import carouselItem1 from '../../assets/Carousel/carousel1.png'
import carouselItem2 from '../../assets/Carousel/carousel2.png'
import carouselItem3 from '../../assets/Carousel/carousel3.png'
import carouselItem4 from '../../assets/Carousel/carousel4.png'
import carouselItem5 from '../../assets/Carousel/carousel5.png'
import nikeImg from '../../assets/FrameNike.png'
import Mario from '../../assets/mario.gif'
import Psyduck from '../../assets/Stickers/GroupPsyduck.png';

const Bento = () => {
  return (
    <div className={styles.bento}>
      <div className={styles.carousel}>
      <div className={styles.title}>Some selected shots</div>
        <Carousel
          infiniteLoop
          autoPlay
          interval={3000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          emulateTouch
          centerMode
          centerSlidePercentage={100}
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

      <div className={`${styles.section} ${styles.hide}`} >
        <div className={styles.colorScroll}>
          <div className={styles.marqueeContent}>
            <Color />
            <Color />
          </div>
        </div>
        <div className={styles.poster}>
          <img src={nikeImg} alt="nike" />
        </div>
      </div>

      <div className={styles.section} >
        <div className={styles.sticker}>
          <Stickers color={'#FEE286'} img={Psyduck} />
        </div>
        <div className={styles.gif}>
          <img src={Mario} alt="mario gif" />
        </div>
      </div>


    </div>
  );
};

export default Bento;


const Color = () => (
  <svg width="1398" height="121" viewBox="0 0 1398 121" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="699" height="121" fill="url(#paint0_linear_294_93)" />
    <rect x="1398" y="121" width="699" height="121" transform="rotate(-180 1398 121)" fill="url(#paint1_linear_294_93)" />
    <defs>
      <linearGradient id="paint0_linear_294_93" x1="12.2632" y1="60" x2="699" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0.1" stop-color="#EEA908" />
        <stop offset="0.2" stop-color="#F08A33" />
        <stop offset="0.3" stop-color="#F04F69" />
        <stop offset="0.4" stop-color="#EB2799" />
        <stop offset="0.5" stop-color="#CE05E8" />
        <stop offset="0.6" stop-color="#A90EF5" />
        <stop offset="0.7" stop-color="#4F69D2" />
        <stop offset="0.8" stop-color="#27A7A0" />
        <stop offset="0.9" stop-color="#16C566" />
        <stop offset="1" stop-color="#13D14C" />
      </linearGradient>
      <linearGradient id="paint1_linear_294_93" x1="1410.26" y1="181" x2="2097" y2="181" gradientUnits="userSpaceOnUse">
        <stop offset="0.1" stop-color="#EEA908" />
        <stop offset="0.2" stop-color="#F08A33" />
        <stop offset="0.3" stop-color="#F04F69" />
        <stop offset="0.4" stop-color="#EB2799" />
        <stop offset="0.5" stop-color="#CE05E8" />
        <stop offset="0.6" stop-color="#A90EF5" />
        <stop offset="0.7" stop-color="#4F69D2" />
        <stop offset="0.8" stop-color="#27A7A0" />
        <stop offset="0.9" stop-color="#16C566" />
        <stop offset="1" stop-color="#13D14C" />
      </linearGradient>
    </defs>
  </svg>

)