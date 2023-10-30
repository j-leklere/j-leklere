import styles from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project(props) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.img} alt="" />
      <div className={styles.info}>
        <a className={styles.link} href={props.link}>
          <h4 className={styles["heading-quaternary"]}>{props.title}</h4>
          <FontAwesomeIcon className={styles.icon} icon={props.icon} />
        </a>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default Project;
