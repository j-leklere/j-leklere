import styles from "./Header.module.css";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <nav className={styles.contact}>
        <ul>
          <li>
            <a href="https://github.com/j-leklere">
              <FontAwesomeIcon
                className={`${styles["top-menu--links__icon"]} ${styles["icon"]}`}
                icon={faGithub}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joaquin-leklere">
              <FontAwesomeIcon
                className={`${styles["top-menu--links__icon"]} ${styles["icon"]}`}
                icon={faLinkedin}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/joacoleklere_">
              <FontAwesomeIcon
                className={`${styles["top-menu--links__icon"]} ${styles["icon"]}`}
                icon={faInstagram}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
