/* eslint-disable react/no-unescaped-entities */
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
import p1 from '../../assets/projects/p1.png';
import p2 from '../../assets/projects/p2.png';
import p3 from '../../assets/projects/p3.png';
import p4 from '../../assets/projects/p4.png';
import p5 from '../../assets/projects/p5.png';
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
    projectimg: p1,
    date: "Graphy · 2021",
    title: "Goodspace AI Interview",
    description: "Revolutionizing AI Job Interviews with Goodspace",
    url: "https://bootcamp.uxdesign.cc/revolutionizing-ai-job-interviews-with-goodspace-e52384c89b9e"
  },
  {
    projectimg: p2,
    date: "Graphy · 2021",
    title: "Mailchimp",
    description: "Homepage design challenge",
    url: "https://www.behance.net/gallery/181530351/Mailchimp-Homepage-design-challenge-(UI-design)"
  },
  {
    projectimg: p3,
    date: "Graphy · 2021",
    title: "Duolingo",
    description: "Onboarding screens designs",
    url: "https://www.behance.net/gallery/179669299/Duolingo-onboarding-screens-(UI-design)"
  },
  {
    projectimg: p4,
    date: "Graphy · 2021",
    title: "Green genie (UX Case study)",
    description: "One stop solution for all your healthy needs",
    url: "https://www.behance.net/gallery/170629161/Green-Genie-Health-at-your-doorsteps"
  },
  {
    projectimg: p5,
    date: "Graphy · 2021",
    title: "DMRC",
    description: "Heuristic evaluation",
    url: "https://www.behance.net/gallery/192925797/DMRC-Heuristic-Evaluation"
  }
];

const Home = () => {
  return (
    <div className={styles.container}>

      <div className={styles.topGradient}>
        <TopGradient />
      </div>

      <section className={styles.heroSection}>
        {/* <img src={BGsrc} alt="Background" className={styles.bgImage} /> */}
        <div className={styles.heroIcon}> <img src={logoSrc} alt="Logo" /></div>
        <div className={styles.heroContent}>
          <time className={styles.heroTime}><TimeConverter inputTime={new Date()} /> local time</time>
          <h1 className={styles.heroTitle}>Not so product designer,<br />
            Part time photographer,<br />
            love food, music, art</h1>
          <h2 className={styles.heroSubtitle}>It's <strong>नमन भटेजा </strong> <span>👋</span> ,Your friendly neighbourhood product based in Delhi,<br />
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
    <path fillRule="evenodd" clipRule="evenodd" d="M26.2929 19.7929C26.6834 19.4024 27.3166 19.4024 27.7071 19.7929L37.7071 29.7929C38.0976 30.1834 38.0976 30.8166 37.7071 31.2071L27.7071 41.2071C27.3166 41.5976 26.6834 41.5976 26.2929 41.2071C25.9024 40.8166 25.9024 40.1834 26.2929 39.7929L35.5858 30.5L26.2929 21.2071C25.9024 20.8166 25.9024 20.1834 26.2929 19.7929Z" fill="white" />
  </svg>

)

const TopGradient = () => (
  <svg width="1304" height="482" viewBox="0 0 1304 482" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3" filter="url(#filter0_f_421_3802)">
      <path d="M579.373 81.9746C636.324 74.3816 656.259 126.408 732.136 106.394C827.891 81.1365 1120.58 270.654 1102.64 157.394C1078.64 5.89353 738.381 -222.259 609.559 -205.084C480.736 -187.91 410.534 -158.531 386.577 -126.387C334.381 -56.3505 450.551 99.1486 579.373 81.9746Z" fill="url(#paint0_linear_421_3802)" />
      <path d="M600.743 80.6508C736.677 57.9038 901.636 -0.606174 750.1 -71.4702C731.807 -96.4012 552.853 -128.577 416.919 -105.831C280.981 -83.0842 171.211 179.001 207.631 263.893C244.061 348.785 464.809 103.398 600.743 80.6508Z" fill="url(#paint1_linear_421_3802)" />
    </g>
    <defs>
      <filter id="filter0_f_421_3802" x="0.574219" y="-406" width="1302.85" height="887.675" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_421_3802" />
      </filter>
      <linearGradient id="paint0_linear_421_3802" x1="1055.99" y1="47.9175" x2="771.046" y2="-153.267" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5FECFF" />
        <stop offset="1" stopColor="#0085FF" />
      </linearGradient>
      <linearGradient id="paint1_linear_421_3802" x1="409.335" y1="238.209" x2="619.537" y2="18.2778" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFB951" />
        <stop offset="1" stopColor="#F90068" />
      </linearGradient>
    </defs>
  </svg>

)