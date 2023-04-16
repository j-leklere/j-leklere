import styles from "./SectionWork.module.css";
import Adeip from "../Assets/ADEIP.png";
import Barberstudio96 from "../Assets/Barberstudio96.png";
import Sportswear from "../Assets/Sportswear.png";
import Portfolio from "../Assets/Portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

function SectionWork() {
  return (
    <div className={styles["wrapper"]}>
      <h3 className={styles["work"]}>My Work</h3>
      <div className={styles["projects"]}>
        <div className={styles["project"]}>
          <a className={styles["project-link"]} href="https://adeip.net">
            <img src={Adeip} className={styles["project-img"]} alt="" />
            <FontAwesomeIcon
              className={styles["project-link--icon"]}
              icon={faSquareArrowUpRight}
            />
          </a>
          <h4>ADEIP</h4>
          <p className={styles["project-description"]}></p>
        </div>
        <div className={styles["project"]}>
          <a
            className={styles["project-link"]}
            href="https://barberstudio96.netlify.com"
          >
            <img
              src={Barberstudio96}
              className={styles["project-img"]}
              alt=""
            />
            <FontAwesomeIcon
              className={styles["project-link--icon"]}
              icon={faSquareArrowUpRight}
            />
          </a>
          <h4>Barber Studio 96'</h4>
        </div>
        <div className={styles["project"]}>
          <a className={styles["project-link"]} href="/">
            <img src={Sportswear} className={styles["project-img"]} alt="" />
            <FontAwesomeIcon
              className={styles["project-link--icon"]}
              icon={faSquareArrowUpRight}
            />
          </a>
          <h4>SportsWear</h4>
        </div>
        <div className={styles["project"]}>
          <a
            className={styles["project-link"]}
            href="https://j-leklere.netlify.com"
          >
            <img src={Portfolio} className={styles["project-img"]} alt="" />
            <FontAwesomeIcon
              className={styles["project-link--icon"]}
              icon={faSquareArrowUpRight}
            />
          </a>
          <h4>My Website</h4>
        </div>
      </div>
    </div>
  );
}

export default SectionWork;
