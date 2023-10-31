import SectionTitles from "../Components/SectionTitles";
import styles from "./Education.module.css";
import htmlcssCourse from "../Assets/HTML-CSS-CourseImg.jpg";
import javascriptCourse from "../Assets/JavaScript-CourseImg.jpg";
import fullstackCourse from "../Assets/FullStack-CourseImg.jpg";
import nodeCourse from "../Assets/Node-CourseImg.jpg";
import reactCourse from "../Assets/React-CourseImg.jpg";
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
          topLine="22%"
          topInfo="calc(22% + 3.6rem)"
        />
        <CardEducationRight
          title="JavaScript"
          text="The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!"
          img={javascriptCourse}
          topLine="25%"
          topInfo="calc(25% + 3.6rem)"
        />
        <CardEducationLeft
          title="Full Stack Web Development"
          text="Full stack web development intensive course, learning how to build a responsive real world e-commerce using scrum metodology."
          img={fullstackCourse}
          topLine="50%"
          topInfo="calc(50% + 3.6rem)"
        />
        <CardEducationRight
          title="Full Stack Web Development"
          text="Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)."
          img={nodeCourse}
          topLine="53%"
          topInfo="calc(53% + 3.6rem)"
        />
        <CardEducationLeft
          title="React.js, Redux & More"
          text="Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns"
          img={reactCourse}
          topLine="78%"
          topInfo="calc(78% + 3.6rem)"
        />
      </div>
    </section>
  );
}

export default Education;
