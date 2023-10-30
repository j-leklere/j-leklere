import styles from "./Projects.module.css";
import SectionTitles from "../Components/SectionTitles";
import Project from "../Components/Project";
import adeip from "../Assets/ADEIP.png";
import jsj from "../Assets/jsjsolutions.png";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <section>
      <SectionTitles
        header-tertiary="PROJECTS"
        header-secondary="04. Some Things I’ve Built"
        text-align="left"
      />
      <div className={styles.projects}>
        <Project
          img={adeip}
          link="www.adeip.org.ar"
          title="adeip.org.ar"
          icon={faUpRightFromSquare}
          text="As if made held in an shot. By it enough to valley desire do. Random Text, am increasing at contrasted in favourable he considered astonished. As if made held in an shot. By it enough to valley desire do. Mrs chief great maids these which."
        />
        <Project
          img={jsj}
          link="www.jsjsolutions.net"
          title="jsjsolutions.net"
          icon={faUpRightFromSquare}
          text="The increasing at contrasted in favourable he considered astonished. As if made held in an shot. By it enough to valley desire do. Mrs chief great maids these which are ham match she. As if made held in an shot. By it enough to valley desire do."
        />
        {/* <Project /> */}
      </div>
    </section>
  );
}

export default Projects;
