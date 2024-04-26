import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes
import styles from './MusicCard.module.scss';


const MusicCard = ({ albumCover, vinyl, title, singer, songUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const vinylRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        vinylRef.current.classList.remove(styles.vinylAnimated);
        vinylRef.current.classList.add(styles.vinylReturn);
      } else {
        audioRef.current.play();
        vinylRef.current.classList.remove(styles.vinylReturn);
        vinylRef.current.classList.add(styles.vinylAnimated);
      }
    }
    if (isPlaying) {
      vinylRef.current.classList.remove(styles.vinylAnimated);
      vinylRef.current.classList.add(styles.vinylReturn);
    } else {
      vinylRef.current.classList.remove(styles.vinylReturn);
      vinylRef.current.classList.add(styles.vinylAnimated);
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={styles.albumContainer} >
      <div className={styles.albumDetails} onClick={togglePlayPause}>
        <audio src={songUrl} ref={audioRef}></audio>
        <div className={styles.albumCover}>
          <img src={albumCover} alt="" />
        </div>
        <div ref={vinylRef} className={`${styles.vinyl} `}>
          <img src={vinyl} alt="" />
        </div>
      </div>
      <div className={styles.albumMetadata}>
        <div className={styles.title}>{title}</div>
        <div className={styles.singer}>{singer}</div>
      </div>
    </div>
  )
}

MusicCard.propTypes = {
  albumCover: PropTypes.node,
  vinyl: PropTypes.node,
  title: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  songUrl: PropTypes.string.isRequired,
};

export default MusicCard
