import styles from "./CardEducationLeft.module.css";

function CardEducationLeft(props) {
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
        <p>{props.text}</p>
        <img src={props.img} alt="Course" />
      </div>
    </div>
  );
}

export default CardEducationLeft;
