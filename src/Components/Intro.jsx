import styles from "./Intro.module.css";

import Header from "./Header";
import Hero from "./Hero";

function Intro() {
  return (
    <section className={styles.intro}>
      <Header />
      <Hero />
    </section>
  );
}

export default Intro;
