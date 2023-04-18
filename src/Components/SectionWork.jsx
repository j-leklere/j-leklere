import styles from "./SectionWork.module.css";
import Adeip from "../Assets/ADEIP.png";
import Barberstudio96 from "../Assets/Barberstudio96.png";
import Sportswear from "../Assets/Sportswear.png";
import Portfolio from "../Assets/Portfolio.png";
import Project from "./Project";

function SectionWork() {
  return (
    <div className={styles["wrapper"]}>
      <h3 className={styles["work"]}>My Work</h3>
      <div className={styles["projects"]}>
        <Project
          link={"https://adeip.net"}
          image={Adeip}
          title={"ADEIP"}
          description={
            "Informative website created for an association of psychologists. This project was made in 2023 by my current team of programmers, made up of: a friend, my brother and me."
          }
        />
        <Project
          link={"https://barberstudio96.netlify.com"}
          image={Barberstudio96}
          title={"Barber Studio 96'"}
          description={
            "Web page created for a barber, including appointment booking and login. This project was made in 2023 by my current team of programmers, made up of: a friend, my brother and me."
          }
        />
        <Project
          link={"/"}
          image={Sportswear}
          title={"SportsWear"}
          description={
            "E-commerce made during the intensive course of Full Stack Web Programming at Digital House. Carried out with two partners."
          }
        />
        <Project
          link={"https://j-leklere.netlify.com"}
          image={Portfolio}
          title={"My Website"}
          description={
            "This is my personal website/portfolio, developed by myself, in order to show some of my skills and the projects I´ve worked on so far."
          }
        />
      </div>
    </div>
  );
}

export default SectionWork;
