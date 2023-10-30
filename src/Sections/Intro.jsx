import styles from "./Intro.module.css";

import Header from "../Components/Header";
import Hero from "../Components/Hero";

function Intro() {
  return (
    <div className={styles.intro}>
      <Header />
      <Hero />
    </div>
  );
}

export default Intro;
