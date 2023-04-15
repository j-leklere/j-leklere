import styles from "./SectionWork.module.css";
import Adeip from "../Assets/ADEIP.png";

function SectionWork() {
  return (
    <div className={styles["wrapper"]}>
      <h3 className={styles["work"]}>My Work</h3>
      <div className={styles["projects"]}>
        <div className={styles["project"]}>
          <a className={styles["project-adeip--link"]} href="https://adeip.net">
            <img src={Adeip} className={styles["project-adeip--img"]} alt="" />
          </a>
          <h4>ADEIP</h4>
        </div>
        <div className={styles["project"]}>
          <h4>BARBER STUDIO 96'</h4>
        </div>
        <div className={styles["project"]}>
          <h4>SportsWear</h4>
        </div>
        <div className={styles["project"]}>
          <h4>My Website</h4>
        </div>
      </div>
    </div>
  );
}

export default SectionWork;
