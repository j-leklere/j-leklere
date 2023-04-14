import {
  faGithub,
  faInstagram,
  faLinkedin,
  faNode,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import Postman from "../Assets/postman.png";
import MySQL from "../Assets/mysql.png";

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["top-menu"]}>
        <div className={styles["top-menu--left"]}>
          <h2 className={styles["top-menu--name"]}>Joaquín Leklere</h2>
        </div>
        <div className={styles["top-menu--right"]}>
          <nav className={styles["top-menu--nav"]}>
            <a href="/">Work</a>
            <a href="/">Contact</a>
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
        <div className={styles["intro-right"]}>
          <div className={styles["container"]}>
            <div className={styles["item-1"]}>
              <FontAwesomeIcon
                className={`${styles["intro-right--icon__node"]}`}
                icon={faNode}
              />
            </div>
            <div className={styles["item-2"]}>
              <FontAwesomeIcon
                className={`${styles["intro-right--icon__javascript"]}`}
                icon={faSquareJs}
              />
            </div>
            <div className={styles["item-3"]}>
              <FontAwesomeIcon
                className={`${styles["intro-right--icon__react"]}`}
                icon={faReact}
              />
            </div>
            <div className={styles["item-4"]}>
              <FontAwesomeIcon
                className={`${styles["intro-right--icon__sass"]}`}
                icon={faSass}
              />
            </div>
            <div className={styles["item-5"]}>
              <img
                src={Postman}
                alt="Postman Logo"
                className={`${styles["intro-right--img__postman"]}`}
              />
            </div>
            <div className={styles["item-6"]}>
              <img
                src={MySQL}
                alt="MySQL Logo"
                className={`${styles["intro-right--img__mysql"]}`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
