import styles from './Toggle.module.scss'; // Importing the SCSS module
import { useTheme } from '../../ThemeContext';

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <input onClick={toggleTheme} type="checkbox" id="toggle" checked={theme === 'dark'} className={styles.toggleCheckbox} />
      <label htmlFor="toggle" className={styles.toggleLabel}>
        <span className={styles.toggleLabelBackground}></span>
      </label>
    </>
  );
};

export default Toggle;
