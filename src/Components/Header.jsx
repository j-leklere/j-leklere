import {
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

import FloatingIcons from "./FloatingIcons";

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["top-menu"]}>
        <div className={styles["top-menu--left"]}>
          <h2 className={styles["top-menu--name"]}>Joaquín Leklere</h2>
        </div>
        <div className={styles["top-menu--right"]}>
          <nav className={styles["top-menu--nav"]}>
            <a href="/" className={styles["top-menu--nav__btns"]}>
              Work
            </a>
            <a href="/" className={styles["top-menu--nav__btns"]}>
              Contact
            </a>
          </nav>
          <div className={styles["top-menu--links"]}>
            <a href="https://github.com/j-leklere">
              <FontAwesomeIcon
                className={`${styles["top-menu--links__icon"]} ${styles["icon"]}`}
                icon={faGithub}
              />
            </a>
            <a href="https://www.linkedin.com/in/joaquin-leklere">
              <FontAwesomeIcon
                className={`${styles["top-menu--links__icon"]} ${styles["icon"]}`}
                icon={faLinkedin}
              />
            </a>
            <a href="https://www.instagram.com/joacoleklere_">
              <FontAwesomeIcon
                className={`${styles["top-menu--links__icon"]} ${styles["icon"]}`}
                icon={faInstagram}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles["intro"]}>
        <div className={styles["intro-left"]}>
          <div>
            <h1 className={styles["intro-charge"]}>Full Stack Web Developer</h1>
            <p className={styles["intro-description"]}>
              I'm a 19 year old Argentinian web developer. I've been studying
              web development for 3 years now and I'm really looking forward to
              get a job.
            </p>
          </div>
          <div className={styles["intro-btns"]}>
            <button className={styles["intro-btns--work"]}>My Work</button>
            <button className={styles["intro-btns--resume"]}>
              Download Resume
              <FontAwesomeIcon
                className={`${styles["intro-btns--resume__icon"]}`}
                icon={faCircleArrowDown}
              />
            </button>
          </div>
        </div>
        <FloatingIcons />
      </div>
    </header>
  );
}

export default Header;
