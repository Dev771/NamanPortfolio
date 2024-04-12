//custom
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Stickers from '../Stickers/Stickers';

// scss
import styles from './Bento.module.scss';

// img
import carouselItem from '../../assets/Carousel/carousel.png'
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
          interval={5000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          emulateTouch
          centerMode
          centerSlidePercentage={85}
        >
          <div className={styles.carouselItem}>
            <img src={carouselItem} alt="" />
          </div>
          <div className={styles.carouselItem}>
            <img src={carouselItem} alt="" />
          </div>
          <div className={styles.carouselItem}>
            <img src={carouselItem} alt="" />
          </div>
        </Carousel>
      </div>

      <div className={styles.section}>
        <div className={styles.colorScroll}>
          <div className={styles.colorBlock}></div>
        </div>
        <div className={styles.poster}>
          <img src={nikeImg} alt="nike" />
        </div>
      </div>

      <div className={styles.section}>
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
