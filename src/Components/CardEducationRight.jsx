import styles from "./CardEducationRight.module.css";

function CardEducationRight(props) {
  return (
    <div className={styles.course}>
      <h4 className={styles["course-title2"]}>{props.title}</h4>
      <div className={styles["circle2"]}></div>
      <div className={styles["circle2-line"]}></div>
      <div className={styles["course-info2"]}>
        <img src={props.img} alt="Course" />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default CardEducationRight;
