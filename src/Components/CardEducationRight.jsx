import styles from "./CardEducationRight.module.css";

function CardEducationRight(props) {
  const topLine = {
    top: props.topLine,
  };
  const topInfo = {
    top: props.topInfo,
  };

  return (
    <div className={styles.course}>
      <h4 className={styles["course-title2"]} style={topLine}>
        {props.title}
      </h4>
      <div className={styles["circle2"]} style={topLine}></div>
      <div className={styles["circle2-line"]} style={topLine}></div>
      <div className={styles["course-info2"]} style={topInfo}>
        <img src={props.img} alt="Course" />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default CardEducationRight;
