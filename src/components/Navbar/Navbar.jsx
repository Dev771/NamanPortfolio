import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import chick from '../../assets/chick.png'
import Toggle from '../Toggle/Toggle';

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLogo} onClick={scrollToTop}>
        {atTop
          ?
          <img src={chick} alt="chick" className={styles.animate}/>
          :
          <DownIcon />
        }
      </ul>
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
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="32" viewBox="0 0 21 32" fill="none">
    <path d="M16.4746 17.0232V14.7361L9.97145 9.92969L3.46833 14.7361V17.0232L6.4824 14.7898C7.73681 13.8606 8.6136 13.1995 9.11287 12.8064L9.11287 22.9375H10.8482L10.8482 12.8064C11.4572 13.2829 12.3279 13.944 13.4605 14.7898L16.4746 17.0232Z" fill="#EAEAEA" />
  </svg>
)