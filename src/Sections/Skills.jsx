import styles from "./Skills.module.css";
import SectionTitles from "../Components/SectionTitles";
import { faCode, faServer, faToolbox } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import express from "../Assets/express.png";
import mongodb from "../Assets/mongodb.png";
import mysql from "../Assets/mysql.png";
import postman from "../Assets/postman.svg";
import scrum from "../Assets/scrum.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section>
      <SectionTitles
        header-tertiary="SKILLS"
        header-secondary="02. My Skills"
        text-align="center"
      />
      <div className={styles.skills}>
        <div className={styles["skill-column"]}>
          <FontAwesomeIcon className={styles.icon} icon={faCode} />
          <h4 className={styles["heading-quaternary"]}>Frontend</h4>
          <div className={styles["skills-cards"]}>
            <div className={styles.skill}>
              <FontAwesomeIcon
                className={`${styles["skill-icon"]} ${styles["skill-icon_html"]}`}
                icon={faHtml5}
              />
              <p>HTML</p>
            </div>
            <div className={styles.skill}>
              <FontAwesomeIcon
                className={`${styles["skill-icon"]} ${styles["skill-icon_css"]}`}
                icon={faCss3}
              />
              <p>CSS</p>
            </div>
            <div className={styles.skill}>
              <FontAwesomeIcon
                className={`${styles["skill-icon"]} ${styles["skill-icon_js"]}`}
                icon={faJsSquare}
              />
              <p>JavaScript</p>
            </div>
            <div className={styles.skill}>
              <FontAwesomeIcon
                className={`${styles["skill-icon"]} ${styles["skill-icon_react"]}`}
                icon={faReact}
              />
              <p>React</p>
            </div>
            <div className={styles.skill}>
              <FontAwesomeIcon
                className={`${styles["skill-icon"]} ${styles["skill-icon_sass"]}`}
                icon={faSass}
              />
              <p>Sass</p>
            </div>
          </div>
        </div>
        <div className={styles["skill-column"]}>
          <FontAwesomeIcon className={styles.icon} icon={faServer} />
          <h4 className={styles["heading-quaternary"]}>Backend</h4>
          <div className={styles["skills-cards"]}>
            <div className={styles.skill}>
              <FontAwesomeIcon
                className={`${styles["skill-icon"]} ${styles["skill-icon_node"]}`}
                icon={faNode}
              />
              <p>NodeJS</p>
            </div>
            <div className={styles.skill}>
              <img
                src={express}
                className={`${styles["skill-icon"]} ${styles["skill-icon_express"]}`}
                alt=""
              />
              <p>ExpressJS</p>
            </div>
            <div className={styles.skill}>
              <img
                src={mongodb}
                className={`${styles["skill-icon"]} ${styles["skill-icon_mongodb"]}`}
                alt=""
              />
              <p>MongoDB</p>
            </div>
            <div className={styles.skill}>
              <img
                src={mysql}
                className={`${styles["skill-icon"]} ${styles["skill-icon_mysql"]}`}
                alt=""
              />
              <p>MySQL</p>
            </div>
          </div>
        </div>
        <div className={styles["skill-column"]}>
          <FontAwesomeIcon className={styles.icon} icon={faToolbox} />
          <h4 className={styles["heading-quaternary"]}>Tools</h4>
          <div className={styles["skills-cards"]}>
            <div className={styles.skill}>
              <FontAwesomeIcon
                className={`${styles["skill-icon"]} ${styles["skill-icon_github"]}`}
                icon={faGithub}
              />
              <p>GitHub</p>
            </div>
            <div className={styles.skill}>
              <FontAwesomeIcon
                className={`${styles["skill-icon"]} ${styles["skill-icon_git"]}`}
                icon={faGitAlt}
              />
              <p>GIT</p>
            </div>
            <div className={styles.skill}>
              <img
                src={postman}
                className={`${styles["skill-icon"]} ${styles["skill-icon_postman"]}`}
                alt=""
              />
              <p>Postman</p>
            </div>
            <div className={styles.skill}>
              <img
                src={scrum}
                className={`${styles["skill-icon"]} ${styles["skill-icon_scrum"]}`}
                alt=""
              />
              <p>Scrum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
