import styles from "./CardEducationLeft.module.css";

function CardEducationLeft(props) {
  return (
    <div className={styles.course}>
      <h4 className={styles["course-title2"]}>{props.title}</h4>
      <div className={styles["circle2"]}></div>
      <div className={styles["circle2-line"]}></div>
      <div className={styles["course-info2"]}>
        <p>{props.text}</p>
        <img src={props.img} alt="Course" />
      </div>
    </div>
  );
}

export default CardEducationLeft;
