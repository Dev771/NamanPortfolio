import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Toggle from '../Toggle/Toggle';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLogo}><DownIcon /></ul>
      <ul className={styles.navLinks} >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/about">About</Link></li>
        <li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li className={styles.toggle}><Toggle /></li>
      </ul>
    </nav>
  );
};

export default Navbar;

const DownIcon = () => (
  <svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.33545 14.9768V17.2639L10.8386 22.0703L17.3417 17.2639V14.9768L14.3276 17.2102C13.0732 18.1394 12.1964 18.8005 11.6972 19.1936V9.0625H9.96178V19.1936C9.35283 18.7171 8.4821 18.056 7.34953 17.2102L4.33545 14.9768Z" fill="#EAEAEA" />
  </svg>
)