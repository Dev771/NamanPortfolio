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


const About = () => {
  return (
    <section className={styles.container}>
      {/* <img src={BGsrc} alt="Background" className={styles.bgImage} /> */}
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
          <div className={styles.expItem}>
            <div className={styles.date}>Aug 2023 — Present · Freelance</div>
            <div className={styles.title}> Independent Product Designer</div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.date}>Dec 2022 — Aug 2023 · Full Time</div>
            <div className={styles.title}> Product Designer II — Obvious</div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.date}>Jan 2022 — Nov 2022 · Full time</div>
            <div className={styles.title}> Product Designer II — Quizizz</div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.date}>June 2021 — Jan 2022 · Contract</div>
            <div className={styles.title}> Product Designer — Gojek</div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.date}>Oct 2020 — Jan 2021 · Intern</div>
            <div className={styles.title}>Product Design Intern — Graphy by Unacademy</div>
          </div>
        </section>

        <section className={styles.exp}>
          <h1 className={styles.heading}> Education</h1>
          <div className={styles.expItem}>
            <div className={styles.date}>Coursera 2023</div>
            <div className={styles.title}> Google UX Design</div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.date}>BVICAM · 2021-2023</div>
            <div className={styles.title}> Masters in Computer Application </div>
          </div>
          <div className={styles.expItem}>
            <div className={styles.date}>BVIMR · 2018-2021</div>
            <div className={styles.title}> Bach. in Computer Application </div>
          </div>
        </section>

        <section className={styles.exp}>
          <h1 className={styles.heading}> Education Skills and Interest</h1>
          <div className={styles.expItem}>
            <div className={styles.text}> <strong>Coursera 2023|</strong> like expanding and adapting my thought, skillset and processes to the changing problems and needs in the world around us. I thrive in ambitious, pro-active teams that value ethical product building and cultures that facilitate belonging.</div>
          </div>

        </section>

      </section>

    </section>
  )
}

export default About
