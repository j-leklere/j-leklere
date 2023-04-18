import styles from "./Project.module.css";

function Project(props) {
  return (
    <div className={styles["project"]}>
      <a className={styles["project-link"]} href={props.link}>
        <img src={props.image} className={styles["project-img"]} alt="" />
      </a>
      <div className={styles["project-info"]}>
        <h4>{props.title}</h4>
        <p className={styles["project-description"]}>{props.description}</p>
        <a href={props.link} className={styles["project-btn"]}>
          Visit &#x2197;
        </a>
      </div>
    </div>
  );
}

export default Project;
