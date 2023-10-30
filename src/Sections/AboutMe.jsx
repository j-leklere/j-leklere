import styles from "./AboutMe.module.css";
// import {
//   faCss3Alt,
//   faHtml5,
//   faSquareJs,
// } from "@fortawesome/free-brands-svg-icons";
// import { faCode } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgCV from "../Assets/cvimg.jpg";
import SectionTitles from "../Components/SectionTitles";
import Btn from "../Components/Btn";

function Skills() {
  return (
    <section>
      <SectionTitles
        header-tertiary="ABOUT ME"
        header-secondary="01. Let Me Tell You About Myself"
        text-align="left"
      />
      <div className={styles.personal}>
        <img
          className={styles["img-cv"]}
          src={ImgCV}
          alt="Curriculum Vitae Img of Myself"
        />
        <div className={styles["my-info"]}>
          <p className={styles["my-info_paragraph"]}>
            Hi! My name is Joaquin Leklere and I’m a nineteen years old
            Argentinian web developer, I’ve been studying and practising web
            development for about three years now, and I love it!
          </p>
          <p className={styles["my-info_paragraph"]}>
            I am very disciplined, committed and determined. I strive to be
            better every day and to grow as a person.
          </p>
          <Btn title="Contact Me" display="inline-block" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
