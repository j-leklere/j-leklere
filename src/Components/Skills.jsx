import styles from "./Skills.module.css";
import {
  faCss3Alt,
  faHtml5,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles["skills-block"]}>
        <h2>My Skills</h2>
        <div className={styles.technologies}>
          <div className={styles.frontend}>
            <FontAwesomeIcon icon={faCode} style={{ color: "#ffffff" }} />
            <div>
              <div className={styles.html}>
                <FontAwesomeIcon icon={faHtml5} style={{ color: "#f06529" }} />
              </div>
              <div className={styles.css}>
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  style={{ color: "#264de4" }}
                />
              </div>
              <div className={styles.javascript}>
                <FontAwesomeIcon
                  icon={faSquareJs}
                  style={{ color: "#f0db4f" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.backend}></div>
          <div className={styles.tools}></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
