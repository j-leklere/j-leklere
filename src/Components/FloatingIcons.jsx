import styles from "./FloatingIcons.module.css";
import {
  faNode,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Git from "../Assets/GIT.png";
import Postman from "../Assets/postman.png";
import MySQL from "../Assets/mysql.png";

function FloatingIcons() {
  return (
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
        <div className={styles["item-7"]}>
          <img
            src={Git}
            alt="GIT Logo"
            className={`${styles["intro-right--img__git"]}`}
          />
        </div>
      </div>
    </div>
  );
}

export default FloatingIcons;
