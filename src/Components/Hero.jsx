import React from "react";
import styles from "./Hero.module.css";
import Btn from "./Btn";
// import { faPaperPlane, faDownload } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.details}>
        <div className={styles.info}>
          <span>
            hi 👋🏼, I’m <strong>Joaquín Leklere</strong>
          </span>
          <h1>Full Stack Developer</h1>
          <p>
            I'm a 19 y/o Full Stack Web Developer, passionate about
            <strong> Frontend </strong>
            development.
          </p>
        </div>
        <div className={styles.contact}>
          <Btn title="Download CV" />
          <Btn title="Contact Me" href="#contact" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
