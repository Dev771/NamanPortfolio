import TimeConverter from '../../utilities/Time/TimeConverter';
// logo
import logoSrc from '../../assets/hero.svg';
import BGsrc from '../../assets/heroBG.png';
import goodspaceLogoSrc from '../../assets/goodspace.svg';
import bharatiLogoSrc from '../../assets/bharati.svg';
import kloudracLogoSrc from '../../assets/kloudrac.svg';
import kk from '../../assets/Album/kk.png';
import kkred from '../../assets/Album/red.png';
import em from '../../assets/Album/em.png';
import darkred from '../../assets/Album/darkred.png';



import styles from './HeroSection.module.scss';
//cards
import projectimg from '../../assets/projects/project.png';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Bento from '../../components/Bento/Bento';
import bulb from '../../assets/Stickers/bulb.png'
import char from '../../assets/Stickers/char.png'
import cup from '../../assets/Stickers/cup.png'
import Stickers from '../../components/Stickers/Stickers';
import MusicCard from '../../components/MusicCard/MusicCard';

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
    <>

      <section className={styles.heroSection}>
        <img src={BGsrc} alt="Background" className={styles.bgImage} />
        <div className={styles.heroIcon}> <img src={logoSrc} alt="Logo" /></div>
        <div className={styles.heroContent}>
          <time className={styles.heroTime}><TimeConverter inputTime={new Date()} /> local time</time>
          <h1 className={styles.heroTitle}>Not so product designer,<br />
            Part time photographer,<br />
            love food, music, art</h1>
          <h2 className={styles.heroSubtitle}>It's <span>नमन भटेजा </span>👋 , Your friendly neighbourhood product based in Delhi,<br />
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
        <div className={styles.sticker1}><Stickers color={'#CF7100'} img={char} /></div>
        <div className={styles.sticker2}><Stickers color={'#BA8C8C'} img={cup} /></div>
        <h2 className={styles.title}>
          <span>
            Current Favourite Playlist
          </span>
        </h2>
        <div className={styles.cards}>
          <MusicCard title='Say Something ' singer='Justin Timberlake, Chris Stapleton' albumCover={kk} vinyl={kkred} songUrl=''/>
          <MusicCard title='Say Something ' singer='Justin Timberlake, Chris Stapleton' albumCover={em} vinyl={darkred} />
        </div>
      </section>
    </>
  )
}

export default Home
