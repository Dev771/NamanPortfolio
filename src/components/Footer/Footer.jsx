import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topGradient}>
        <TopGradient />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Ahhh you came here — Say Hi :{")"}</h2>
        {/* <p className={styles.description}>Designed by Naman Bhateja and Developed by <a href="https://portfoliov1-yvoj.onrender.com/" target='_blank' className={styles.highlight}>Anjul Kumar</a>  <br /> */}
        <p className={styles.description}>Designed by Naman Bhateja and Developed by <a href="https://github.com/Dev771" target='_blank' className={styles.highlight}>Dev Garg</a>  <br />
          ft sweet mulberries and hot coffee</p>

      </div>

      <div className={styles.links}>
        <p className={styles.copyright}>© April 2024, Naman Bhateja</p>
        <div className={styles.quickLinks}>
          <a href="https://www.linkedin.com/in/namanbhateja0808/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>LinkedIn</a>
          <a href="https://drive.google.com/file/d/1CA6hUPXG48QfdYlay9CXXzqg3tQ5gk-m/view" target="_blank" rel="noopener noreferrer" className={styles.resume}>Resume</a>
          <a href="tel:+919811535385" className={styles.number}>+91 9811535385</a>
          <a href="mailto:namanbhateja.work@gmail.com" className={styles.email}>namanbhateja.work@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footer


const TopGradient = () => (
  <svg width="1304" height="888" viewBox="0 0 1304 888" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3" filter="url(#filter0_f_427_5327)">
      <path d="M724.627 399.701C667.676 407.294 647.741 355.268 571.864 375.282C476.109 400.539 183.422 211.022 201.364 324.282C225.364 475.782 565.619 703.934 694.441 686.759C823.264 669.585 893.466 640.207 917.423 608.063C969.619 538.026 853.449 382.527 724.627 399.701Z" fill="url(#paint0_linear_427_5327)" />
      <path d="M703.257 401.025C567.323 423.772 402.364 482.282 553.9 553.146C572.193 578.077 751.147 610.253 887.081 587.507C1023.02 564.76 1132.79 302.675 1096.37 217.783C1059.94 132.891 839.191 378.278 703.257 401.025Z" fill="url(#paint1_linear_427_5327)" />
    </g>
    <defs>
      <filter id="filter0_f_427_5327" x="0.574219" y="0" width="1302.85" height="887.675" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_427_5327" />
      </filter>
      <linearGradient id="paint0_linear_427_5327" x1="248.007" y1="433.758" x2="532.954" y2="634.942" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5FECFF" />
        <stop offset="1" stopColor="#0085FF" />
      </linearGradient>
      <linearGradient id="paint1_linear_427_5327" x1="894.665" y1="243.467" x2="684.463" y2="463.398" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFB951" />
        <stop offset="1" stopColor="#F90068" />
      </linearGradient>
    </defs>
  </svg>

)