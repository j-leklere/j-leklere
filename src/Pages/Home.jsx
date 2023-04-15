// import styles from "./Home.module.css";
import Header from "../Components/Header";
import SectionWork from "../Components/SectionWork";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles["background-image"]}>
      <Header></Header>
      <SectionWork></SectionWork>
    </div>
  );
}

export default Home;
