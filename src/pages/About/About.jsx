import React from 'react'
import TimeConverter from '../../utilities/Time/TimeConverter';
// scss
import styles from './About.module.scss';

//img
import Stickers from '../../components/Stickers/Stickers';
import BGsrc from '../../assets/heroBG.png';
import chole from '../../assets/Gallary/chole.png';
import hand from '../../assets/Gallary/hand.png';
import look from '../../assets/Gallary/look.png';
import naman from '../../assets/Gallary/naman.png';
import pasta from '../../assets/Gallary/pasta.png';
import plane from '../../assets/Gallary/plane.png';
import nike from '../../assets/Stickers/nike.png';
import tea from '../../assets/Gallary/tea.png';
import temple from '../../assets/Gallary/temple.png';

const experiences = [
  { suptitle: "Aug 2023 — Present · FULL TIME", title: "Design at Goodspace" },
  { suptitle: "APR 2023 — JUL 2023 · INTERNSHIP", title: "UI Designer at Kloudrac" },
  { suptitle: "Jan 2022 — Nov 2022 · Full TIME", title: "UI Designer & Developer at BVICAM" },
];

const education = [
  { suptitle: "Coursera 2023", title: "Google UX Design" },
  { suptitle: "BVICAM · 2021-2023", title: "Masters in Computer Application" },
  { suptitle: "BVIMR · 2018-2021", title: "Bach. in Computer Application" }
];

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topGradient}>
        <TopGradient />
      </div>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <time className={styles.heroTime}><TimeConverter inputTime={new Date()} /> local time</time>
          <h1 className={styles.heroTitle}>A little more about me...</h1>
        </div>

        <div className={styles.gallery}>

          <div className={styles.section}>
            <div className={styles.pair}>
              <div className={styles.large}> <img src={naman} alt="" /></div>
              <div className={styles.largeMd}><img src={plane} alt="" /></div>
            </div>
            <div className={styles.pair}>
              <div className={styles.mdLarge}><img src={temple} alt="" /></div>
              <div className={styles.small}><img src={chole} alt="" /></div>
            </div>
          </div>

          <div className={styles.section} >
            <div className={styles.pair2}>
              <div className={styles.large}><img src={tea} alt="" /></div>
              <div className={styles.largeMd}><img src={pasta} alt="" /></div>
            </div>
            <div className={styles.pair2}>
              <div className={styles.mdLarge}><img src={look} alt="" /></div>
              <div className={styles.small}><img src={hand} alt="" /></div>
            </div>
          </div>

        </div>
      </section>


      <section className={styles.textContent}>
        <div className={styles.sticker}>
          <Stickers img={nike} color={'#97AAEC'} />
        </div>
        <p>Hey, welcome to my digital abode. Nice to meet you!</p>
        <p>Hey there! I'm Naman Bhateja, an emerging UX/UI designer on an exhilarating journey of learning and exploration in the world of design. Inspired by a personal experience that left me yearning for better solutions, I'm driven by the passion to create seamless, user-centric experiences. <br />
          With every project, I pour my heart into crafting designs that make people's lives easier and more delightful.</p>
        <div>
          Curious by nature, I love connecting with new people and getting
          to know them. I lose track of time when cooking🧑‍🍳, baking 🍪, reading a great book 📖, painting 🎨 , lifting 🏋️, binge-watching a great series or a movies (mostly cartoons) 🎥, or window shopping sneakers
        </div>
      </section>

      <section className={styles.contentContainer}>

        <section className={styles.exp}>
          <h1 className={styles.heading}> Past experiences</h1>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.expItem}>
              <div className={styles.date}>{exp.suptitle}</div>
              <div className={styles.title}>{exp.title}</div>
            </div>
          ))}
        </section>

        <section className={styles.exp}>
          <h1 className={styles.heading}> Education</h1>
          {education.map((exp, index) => (
            <div key={index} className={styles.expItem}>
              <div className={styles.date}>{exp.suptitle}</div>
              <div className={styles.title}>{exp.title}</div>
            </div>
          ))}
        </section>

        <section className={styles.exp}>
          <h1 className={styles.heading}> Education, Skills and Interest</h1>
          <div className={styles.expItem}>
            <div className={styles.text}> <strong>Coursera 2023|</strong> like expanding and adapting my thought, skillset and processes to the changing problems and needs in the world around us. I thrive in ambitious, pro-active teams that value ethical product building and cultures that facilitate belonging.</div>
          </div>

        </section>

      </section>

    </section>
  )
}

export default About


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