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
          <div className={styles.dialog}> <Dialog /></div>
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

const Dialog = () => (
  <svg width="118" height="110" viewBox="0 0 118 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.207 62.2138C11.5162 46.2739 23.344 30.4926 35.9573 21.9936C49.8307 12.6439 68.9747 11.9762 84.3278 17.7117C84.4491 17.7505 84.5602 17.8162 84.6527 17.9038C84.7453 17.9914 84.817 18.0987 84.8625 18.2178C91.3139 20.6526 96.9423 24.8072 100.5 31.2585C106.09 41.3991 102.924 50.4554 94.8965 58.0938C92.652 60.229 90.0909 61.5703 87.4162 63.0808C84.907 64.4974 81.5443 65.0806 82.1515 68.179C82.4622 69.7602 84.9645 73.3605 85.6854 74.936C87.0895 78.0015 88.3176 80.9191 89.0237 84.2238C89.2752 85.3986 88.1926 86.3702 87.1623 86.5644C85.1814 86.938 83.4355 85.6953 81.8219 84.6879C78.5049 82.6175 75.3184 80.6274 71.8588 78.7596C66.7108 75.9797 64.3395 77.9015 59.2501 79.8581C55.0336 81.4788 50.3549 82.5633 45.8892 83.2509C30.8762 85.5635 12.974 79.8681 12.207 62.2138ZM41.4612 79.3623C40.4637 78.2332 38.6437 77.4403 37.5473 76.5798C35.9895 75.3588 34.4742 74.0841 32.9514 72.8193C32.6114 72.5417 33.0258 72.0091 33.3666 72.2829C35.2854 73.8223 37.1707 75.4689 39.2101 76.8477C40.368 77.6309 41.6693 78.1482 42.4845 79.2899C44.0187 79.1667 45.549 78.9742 47.0587 78.7303C45.9032 77.6316 44.735 76.547 43.5664 75.4614C43.45 75.3537 43.5952 75.1604 43.7165 75.2661C44.9502 76.3118 46.185 77.3604 47.4293 78.387C47.4679 78.4187 47.495 78.4624 47.5061 78.5112C47.5172 78.56 47.5118 78.6111 47.4907 78.6564C49.1478 78.3728 50.778 78.0222 52.333 77.6264C51.3343 76.9336 50.4098 76.1393 49.5742 75.2562C48.3831 73.9978 47.4879 72.2474 45.785 71.6294C45.3846 71.4859 45.6457 70.8844 46.042 71.0261C47.3917 71.5045 48.3175 72.5972 49.2311 73.6513C50.4916 75.105 51.9334 76.2364 53.4802 77.3222C55.3663 76.8036 57.1511 76.2205 58.7625 75.604C56.4904 73.8393 53.9673 72.4397 51.5913 70.806C51.1938 70.5331 51.6536 69.9456 52.048 70.2163C54.5567 71.9329 57.2431 73.3835 59.6342 75.2595L60.3229 74.9828C65.6167 72.7416 67.4843 72.0462 72.6597 74.6241C75.3033 75.9397 77.9884 77.2422 80.4841 78.8324C81.2931 79.3473 82.4881 80.4302 83.7073 81.2723C82.3536 77.7633 80.4582 74.4535 78.819 71.0957C78.7423 70.9389 78.6591 70.7744 78.5776 70.6114C77.2458 69.7196 75.7779 68.8447 75.4843 68.0312C75.3755 67.7236 75.8368 67.5349 75.9565 67.8415C76.2043 68.4811 77.1013 69.0671 78.11 69.6665C77.3557 68.0735 76.7126 66.302 77.3914 64.6127C77.5066 64.3334 77.6541 64.0687 77.8309 63.8239L76.0164 61.6568C75.777 61.3708 76.2342 61.0269 76.475 61.3078L78.2273 63.3431C79.1706 62.3691 80.5531 61.8881 81.9104 61.4412C81.0712 60.8824 80.1134 60.4468 79.292 59.9209C77.754 58.9368 76.2608 57.905 74.8206 56.7833C74.4698 56.51 74.8901 55.9693 75.2427 56.2384C76.9748 57.5575 78.7877 58.8419 80.7049 59.8796C81.4494 60.2796 82.2254 60.6327 82.9056 61.1112C83.245 60.992 83.5768 60.8678 83.8889 60.7288C85.0728 60.1922 86.2247 59.5877 87.3389 58.9182C87.275 58.8819 87.2206 58.831 87.1802 58.7696C87.1398 58.7081 87.1146 58.638 87.1067 58.5649C87.0988 58.4918 87.1084 58.4179 87.1346 58.3493C87.1609 58.2807 87.2032 58.2193 87.2579 58.1704L87.2799 58.1512C83.9751 55.4741 79.7207 54.31 76.558 51.4064C76.2392 51.1134 76.6458 50.5782 76.9732 50.87C80.3157 53.8513 84.8318 54.9102 88.2551 57.78C88.3261 57.8382 88.3773 57.917 88.4018 58.0055C88.4263 58.094 88.4229 58.1879 88.392 58.2743C90.2289 57.1011 91.9361 55.7359 93.4848 54.2017C89.9984 52.4122 87.0088 49.8144 83.6871 47.7493C83.346 47.5374 83.731 47.0509 84.0662 47.2538C87.4401 49.3208 90.4585 51.9505 94.0552 53.6305C95.0479 52.5842 95.9663 51.4697 96.8035 50.295C97.0403 49.963 97.2358 49.6305 97.4431 49.2989C97.3798 49.2559 97.3277 49.1983 97.2911 49.1311C96.224 47.1718 92.9092 46.3214 91.0467 45.2492C89.1535 44.1629 87.398 42.939 85.7996 41.4517C85.4723 41.1461 85.8941 40.5922 86.2285 40.8984C88.4498 42.9261 91.0172 44.5356 93.7639 45.7526C95.2915 46.4262 97.079 46.9679 97.9485 48.4665C98.7501 47.0445 99.3247 45.5057 99.6515 43.9056C99.5895 43.9585 99.5099 43.9863 99.4284 43.9835C99.3469 43.9806 99.2694 43.9474 99.2111 43.8903C96.2416 41.2089 92.6298 39.6219 89.1389 37.753C88.8781 37.6129 89.0545 37.1873 89.3206 37.3264C92.8481 39.1727 96.5574 40.7662 99.6882 43.2718C99.7112 43.2932 99.7313 43.3174 99.748 43.3439C99.9992 41.7593 99.976 40.1429 99.6794 38.5656L99.4133 38.4437C99.058 38.2844 99.1343 37.8601 99.3953 37.7163C96.6107 35.7879 93.5942 34.3348 90.5109 32.8914C88.523 31.9565 86.5373 31.0299 84.5267 30.1464C83.5217 29.7069 83 29.5744 82.2551 28.7214C81.9995 28.4293 82.4751 28.0746 82.7319 28.3582C83.7718 29.5103 86.6277 30.3105 87.9707 30.9174C89.7267 31.7075 91.4899 32.4843 93.2351 33.2845C95.2478 34.2014 97.2304 35.1659 99.0872 36.3434C96.1735 27.9847 86.2936 21.3021 77.7034 19.468C71.8828 18.2249 65.8815 17.8805 60.0244 19.0608C56.8701 19.6964 46.1588 21.5842 44.2624 23.9858C43.9867 24.3346 43.3318 23.9901 43.5675 23.5784C44.0492 22.7269 44.7509 22.0731 45.5847 21.5574C42.8078 22.7801 40.1624 24.2819 37.689 26.0396C26.3865 34.1208 14.2067 50.0526 16.976 64.9263C19.2051 76.931 30.2673 80.0377 41.4612 79.3623Z" fill="#FFD9D4" />
    <path d="M40.3324 63.2912L36.2724 57.5889L38.3822 56.0867C38.8384 55.7619 39.27 55.5692 39.677 55.5086C40.0839 55.448 40.4554 55.4985 40.7915 55.6602C41.1276 55.8219 41.4136 56.0684 41.6495 56.3997C41.8738 56.7147 42.01 57.0555 42.0583 57.4221C42.1027 57.7833 42.0336 58.1517 41.8509 58.5273C41.6643 58.8975 41.3375 59.2488 40.8705 59.5814L39.8033 60.3412L41.3751 62.5488L40.3324 63.2912ZM39.2001 59.494L40.2021 58.7806C40.566 58.5215 40.7706 58.2572 40.8159 57.9875C40.8628 57.7086 40.7877 57.4307 40.5905 57.1537C40.3894 56.8713 40.1514 56.7093 39.8763 56.6679C39.6028 56.6171 39.2841 56.7212 38.9203 56.9803L37.9183 57.6937L39.2001 59.494ZM45.2561 59.7855L41.0801 53.9203L42.1228 53.1779L46.2988 59.0431L45.2561 59.7855ZM48.8269 57.3904C48.4793 57.6379 48.1555 57.7866 47.8555 57.8365C47.5516 57.881 47.2797 57.8496 47.0396 57.7423C46.7995 57.635 46.6002 57.47 46.4417 57.2473C46.1749 56.8726 46.105 56.4641 46.2319 56.0218C46.3589 55.5794 46.7157 55.1495 47.3022 54.7319L48.3286 54.0011L48.259 53.9033C48.0618 53.6263 47.8381 53.4788 47.5878 53.4606C47.3375 53.4424 47.0956 53.5164 46.8621 53.6827C46.6503 53.8335 46.5024 54.0165 46.4183 54.2318C46.3304 54.4417 46.3371 54.658 46.4383 54.8805L45.42 55.6055C45.2384 55.2929 45.1544 54.9681 45.1681 54.631C45.1872 54.29 45.2919 53.9659 45.4822 53.6585C45.6687 53.3457 45.9303 53.0694 46.267 52.8297C46.8427 52.4198 47.3986 52.2408 47.9348 52.2928C48.471 52.3448 48.9267 52.6341 49.3017 53.1609L51.0707 55.6455L50.1828 56.2777L49.6211 55.6956C49.6563 55.9979 49.6155 56.297 49.4988 56.5928C49.3875 56.8848 49.1636 57.1507 48.8269 57.3904ZM48.4831 56.4076C48.7818 56.195 48.943 55.9329 48.9667 55.6214C48.9959 55.306 48.9297 54.9889 48.7682 54.6702L47.8803 55.3024C47.6033 55.4996 47.4418 55.6923 47.3958 55.8805C47.3459 56.0634 47.3732 56.2281 47.4776 56.3747C47.5897 56.5322 47.7365 56.6119 47.9178 56.6137C48.0991 56.6155 48.2876 56.5468 48.4831 56.4076ZM53.7116 56.4658L53.181 53.7379L52.9366 53.9119L48.679 51.2596L49.8113 50.4534L52.9678 52.4902L52.1248 48.8062L53.2327 48.0174L54.8195 55.677L53.7116 56.4658ZM58.7322 50.1905L55.8554 46.15L56.7759 45.4946L57.2541 45.9766C57.2453 45.6883 57.3061 45.4117 57.4367 45.1468C57.5689 44.8727 57.7762 44.6351 58.0586 44.434C58.6831 43.9894 59.2978 43.9159 59.9026 44.2136C59.8907 43.8866 59.9605 43.5709 60.1121 43.2665C60.2691 42.9583 60.4943 42.6998 60.7875 42.491C61.3143 42.1159 61.831 41.9854 62.3377 42.0993C62.8444 42.2132 63.3142 42.5743 63.7473 43.1825L65.3713 45.4634L64.3286 46.2058L62.7742 44.0227C62.5267 43.6751 62.2694 43.4573 62.0021 43.3694C61.7403 43.2775 61.471 43.3302 61.194 43.5274C60.9116 43.7285 60.757 43.994 60.7301 44.3241C60.7087 44.6504 60.8295 44.9981 61.0924 45.3674L62.5772 47.4528L61.5345 48.1953L59.9801 46.0121C59.7326 45.6645 59.4753 45.4467 59.208 45.3588C58.9408 45.2708 58.666 45.3273 58.3836 45.5284C58.1066 45.7256 57.9547 45.9893 57.9278 46.3194C57.9064 46.6456 58.0272 46.9934 58.2901 47.3627L59.7749 49.4481L58.7322 50.1905ZM68.3941 43.4585C67.9868 43.7485 67.5638 43.9188 67.1251 43.9692C66.6863 44.0197 66.2652 43.9513 65.8617 43.7639C65.4583 43.5765 65.1096 43.2765 64.8157 42.8637C64.518 42.4456 64.34 42.0117 64.2818 41.5621C64.229 41.1087 64.2936 40.6821 64.4755 40.2825C64.659 39.8736 64.9626 39.5183 65.3862 39.2167C65.7826 38.9345 66.1948 38.772 66.6227 38.7292C67.0505 38.6864 67.4569 38.7572 67.8418 38.9415C68.2282 39.1164 68.5529 39.3885 68.8159 39.7578C68.8584 39.8176 68.9001 39.882 68.9411 39.951C68.9875 40.0162 69.0331 40.086 69.078 40.1604L66.0069 42.3471C66.2529 42.6466 66.5374 42.8163 66.8605 42.8564C67.1891 42.8925 67.4945 42.81 67.7769 42.609C67.9887 42.4582 68.1324 42.2863 68.2078 42.0935C68.2849 41.8913 68.3045 41.6891 68.2669 41.4868L69.3259 40.7328C69.4316 41.0421 69.4702 41.3665 69.4418 41.7059C69.415 42.036 69.3137 42.3536 69.1381 42.6587C68.9679 42.9599 68.7199 43.2265 68.3941 43.4585ZM65.9894 40.0639C65.7342 40.2457 65.561 40.4794 65.4699 40.7653C65.3749 41.0457 65.4047 41.3518 65.5592 41.6838L67.5713 40.2512C67.3655 39.9967 67.1169 39.8545 66.8256 39.8246C66.5342 39.7947 66.2555 39.8745 65.9894 40.0639ZM70.168 39.3352L67.2757 35.5144L68.3917 34.7198L71.0478 38.7088L70.168 39.3352ZM71.9547 40.862C71.7592 41.0012 71.5565 41.0555 71.3465 41.0249C71.142 40.9905 70.9798 40.8892 70.8599 40.7208C70.7362 40.547 70.6915 40.3579 70.7259 40.1533C70.7657 39.9449 70.8834 39.7711 71.0789 39.6319C71.2636 39.5004 71.4582 39.4519 71.6627 39.4863C71.8727 39.5168 72.0395 39.619 72.1633 39.7928C72.2831 39.9611 72.3231 40.1495 72.2833 40.3579C72.2489 40.5625 72.1394 40.7305 71.9547 40.862ZM72.5784 37.619L69.6861 33.7982L70.8022 33.0036L73.4582 36.9926L72.5784 37.619ZM74.3652 39.1457C74.1696 39.2849 73.9669 39.3393 73.7569 39.3087C73.5524 39.2743 73.3902 39.1729 73.2703 39.0046C73.1466 38.8308 73.1019 38.6416 73.1363 38.4371C73.1762 38.2287 73.2938 38.0549 73.4893 37.9157C73.674 37.7842 73.8686 37.7357 74.0731 37.7701C74.2831 37.8006 74.45 37.9028 74.5737 38.0766C74.6936 38.2449 74.7336 38.4333 74.6937 38.6417C74.6593 38.8462 74.5498 39.0143 74.3652 39.1457Z" fill="#CCCCCC" />
  </svg>
)