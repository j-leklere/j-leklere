import SectionTitles from "../Components/SectionTitles";
import styles from "./Education.module.css";
import htmlcssCourse from "../Assets/HTML-CSS-CourseImg.jpg";
import javascriptCourse from "../Assets/JavaScript-CourseImg.jpg";
import CardEducationLeft from "../Components/CardEducationLeft";
import CardEducationRight from "../Components/CardEducationRight";

function Education() {
  return (
    <section className={styles["section-education"]}>
      <SectionTitles
        header-tertiary="EDUCATION"
        header-secondary="03. Educational Path"
        text-align="center"
      />
      <div className={styles.line}></div>
      <div className={styles.year2021}>2021</div>
      <div className={styles.year2022}>2022</div>
      <div className={styles.year2023}>2023</div>
      <div className={styles.courses}>
        <CardEducationLeft
          title="HTML, CSS and UX & UI Design"
          text="Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! "
          img={htmlcssCourse}
        />
        <CardEducationRight
          title="JavaScript"
          text="The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!"
          img={javascriptCourse}
        />
      </div>
    </section>
  );
}

export default Education;
