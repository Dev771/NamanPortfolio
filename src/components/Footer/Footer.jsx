import Stickers from '../Stickers/Stickers'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.content}>
        <h2 className={styles.title}>Ahhh you came here — Say Hi :{")"}</h2>
        <p className={styles.description}>Designed by Naman Bhateja and Developed by Anjul Kumar <br />
          ft sweet mulberries and hot coffee</p>

      </div>

      <div className={styles.links}>
        <p className={styles.copyright}>© April 2024, Naman Bhateja</p>
        <div className={styles.quickLinks}>
          <a href="https://linkedin.com" className={styles.linkedin}>LinkedIn</a>
          <a href="resume.pdf" className={styles.resume}>Resume</a>
          <a className={styles.number}>+91 9811535385</a>
          <a href="mailto:namanbhateja.work@gmail.com" className={styles.email}>namanbhateja.work@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footer