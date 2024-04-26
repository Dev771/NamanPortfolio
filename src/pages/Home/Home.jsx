import TimeConverter from '../../utilities/Time/TimeConverter';
import { Carousel } from 'react-responsive-carousel';
// logo
import logoSrc from '../../assets/hero.svg';
import goodspaceLogoSrc from '../../assets/goodspace.svg';
import bharatiLogoSrc from '../../assets/bharati.svg';
import kloudracLogoSrc from '../../assets/kloudrac.svg';
import kk from '../../assets/Album/kk.png';
import kkred from '../../assets/Album/red.png';
import em from '../../assets/Album/em.png';
import darkred from '../../assets/Album/darkred.png';

//Audio
import DilIbaadat from '../../assets/Audio/Dil-Ibaadat.mp3'
import EminemSuperman from '../../assets/Audio/EminemSuperman.mp3'


import styles from './HeroSection.module.scss';
//cards
import projectimg from '../../assets/projects/project.png';
import Card from '../../components/Card/Card';
import Bento from '../../components/Bento/Bento';
import bulb from '../../assets/Stickers/bulb.png'
import char from '../../assets/Stickers/char.png'
import cup from '../../assets/Stickers/cup.png'
import Stickers from '../../components/Stickers/Stickers';
import MusicCard from '../../components/MusicCard/MusicCard';
import MobileBento from '../../components/MobileBento/MobileBento';



const cardData = [
  {
    projectimg: projectimg,
    date: "Graphy · 2021",
    title: "Project 2",
    description: "Redesigned existing and new features like search, polls, quiz, live and more",
    url: "your-clickable-url-1"
  },
  {
    projectimg: projectimg,
    date: "Graphy · 2021",
    title: "Project 2",
    description: "Redesigned existing and new features like search, polls, quiz, live and more",
    url: "your-clickable-url-2"
  },
  {
    projectimg: projectimg,
    date: "Graphy · 2021",
    title: "Project 2",
    description: "Redesigned existing and new features like search, polls, quiz, live and more",
    url: "your-clickable-url-3"
  },
  {
    projectimg: projectimg,
    date: "Graphy · 2021",
    title: "Project 2",
    description: "Redesigned existing and new features like search, polls, quiz, live and more",
    url: "your-clickable-url-4"
  }
];

const Home = () => {
  return (
    <div className={styles.container}>

      <section className={styles.heroSection}>
        {/* <img src={BGsrc} alt="Background" className={styles.bgImage} /> */}
        <div className={styles.heroIcon}> <img src={logoSrc} alt="Logo" /></div>
        <div className={styles.heroContent}>
          <time className={styles.heroTime}><TimeConverter inputTime={new Date()} /> local time</time>
          <h1 className={styles.heroTitle}>Not so product designer,<br />
            Part time photographer,<br />
            love food, music, art</h1>
          <h2 className={styles.heroSubtitle}>It's <strong>नमन भटेजा </strong> <span>👋</span> , Your friendly neighbourhood product based in Delhi,<br />
            India. I enjoy crafting exceptional digital interfaces that offer<br />
            delightful and intuitive experiences.</h2>
          <p className={styles.heroText}>I worked with...</p>
          <div className={styles.heroLogo}>
            <img src={goodspaceLogoSrc} alt="Goodspace logo" />
            <img src={kloudracLogoSrc} alt="Kloudrac logo" />
            <img src={bharatiLogoSrc} alt="Bharati logo" />
          </div>
        </div>
      </section>

      <Bento />

      <div className={styles.mobileBento}>
        <h3 className={styles.title}>Some selected shots</h3>
        <MobileBento />
      </div>

      <section className={styles.projectSection}>
        <div className={styles.sticker}>
          <Stickers color={'#72B0A6'} img={bulb} />
        </div>
        <h2 className={styles.title}>
          <span>
            Some of my selected works
          </span>
        </h2>
        <div className={styles.cardsContainer}>
          <Carousel
            infiniteLoop
            autoPlay
            interval={5000}
            showThumbs={false}
            // showArrows={false}
            showStatus={false}
            emulateTouch
            centerMode
            centerSlidePercentage={53}
            renderIndicator={false}
            renderArrowPrev={(onClickHandler, hasPrev, labelPrev) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={labelPrev} className={styles.carouselBtn} style={{ transform: 'rotateY(180deg)', left: '5%' }}>
                  <NextIcon />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, labelNext) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={labelNext} className={styles.carouselBtn} style={{ right: '5%' }} >
                  <NextIcon />
                </button>
              )
            }
          >
            {cardData.map((card, index) => (
              <Card
                key={index}
                projectimg={card.projectimg}
                date={card.date}
                title={card.title}
                description={card.description}
                url={card.url}
              />
            ))}
          </Carousel>
        </div>

        <div className={styles.cardsContainerMobile}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              projectimg={card.projectimg}
              date={card.date}
              title={card.title}
              description={card.description}
              url={card.url}
            />
          ))}
        </div>

      </section>

      <section className={styles.playlist}>
        <div className={styles.sticker1}><Stickers color={'#EFA750'} img={char} /></div>
        <div className={styles.sticker2}><Stickers color={'#FCBAB3'} img={cup} /></div>
        <h2 className={styles.title}>
          <span>
            Current Favorite Playlist
          </span>
        </h2>
        <div className={styles.cards}>
          <MusicCard title='Dil Ibaadat (from "tum mile") ' singer='Pritam Chakraborty, KK' albumCover={kk} vinyl={kkred} songUrl={DilIbaadat} />
          <MusicCard title='Superman ' singer='Eminem' albumCover={em} vinyl={darkred} songUrl={EminemSuperman} />
        </div>
      </section>
    </div>
  )
}

export default Home


const NextIcon = () => (
  <svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2929 19.7929C26.6834 19.4024 27.3166 19.4024 27.7071 19.7929L37.7071 29.7929C38.0976 30.1834 38.0976 30.8166 37.7071 31.2071L27.7071 41.2071C27.3166 41.5976 26.6834 41.5976 26.2929 41.2071C25.9024 40.8166 25.9024 40.1834 26.2929 39.7929L35.5858 30.5L26.2929 21.2071C25.9024 20.8166 25.9024 20.1834 26.2929 19.7929Z" fill="white" />
  </svg>

)