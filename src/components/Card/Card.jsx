import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ projectimg, date, title, description, url }) => {
  return (
    <>
      <article className={styles.card}>
        <a href={url} className={styles.card}>

          <img src={projectimg} alt="project" className={styles.image} />

          <div className={styles.footer}>
            <div className={styles.details}>
              <div className={styles.date}>{date}</div>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.icon}>
              <LeftIcon />
            </div>
          </div>
        </a>
      </article>
    </>
  );
};

Card.propTypes = {
  projectimg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};


export default Card;


const LeftIcon = () => (
  <svg width="48" height="48" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="31.1099" cy="30.5" r="30.5" fill="white" fillOpacity="0.5" />
    <path fillRule="evenodd" clipRule="evenodd" d="M26.2929 19.7929C26.6834 19.4024 27.3166 19.4024 27.7071 19.7929L37.7071 29.7929C38.0976 30.1834 38.0976 30.8166 37.7071 31.2071L27.7071 41.2071C27.3166 41.5976 26.6834 41.5976 26.2929 41.2071C25.9024 40.8166 25.9024 40.1834 26.2929 39.7929L35.5858 30.5L26.2929 21.2071C25.9024 20.8166 25.9024 20.1834 26.2929 19.7929Z" fill="white" />
  </svg>
)