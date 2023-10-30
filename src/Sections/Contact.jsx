import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import SectionTitles from "../Components/SectionTitles";

function Contact() {
  return (
    <section id="contact">
      <SectionTitles
        header-tertiary="CONTACT"
        header-secondary="05. Let’s Get In Touch"
        text-align="left"
      />
      <div className={styles.contact}>
        <div className={styles["contact-info"]}>
          <p>These are the means through which you can contact me.</p>
          <div className={styles["contact-icons"]}>
            <div>
              <FontAwesomeIcon
                className={styles["contact-icon"]}
                icon={faEnvelope}
              />
              <a href="#contact">jleklere@gmail.com</a>
            </div>
            <div>
              <FontAwesomeIcon
                className={styles["contact-icon"]}
                icon={faWhatsapp}
              />
              <a href="#contact">+5491134222910</a>
            </div>
            <div>
              <FontAwesomeIcon
                className={styles["contact-icon"]}
                icon={faLinkedin}
              />
              <a href="/www.linkedin.com/in/joaquin-leklere">
                www.linkedin.com/in/joaquin-leklere
              </a>
            </div>
          </div>
          <p>
            Or you can simply fill out this form. In any case, I will respond
            shortly after.
          </p>
        </div>
        <div className={styles["contact-line"]}></div>
        <div className={styles["contact-form"]}>
          <form action="POST">
            <label htmlFor="fullname">
              <input type="text" name="fullname" placeholder="Name" />
            </label>
            <label htmlFor="email">
              <input type="text" name="email" placeholder="Mail" />
            </label>
            <label htmlFor="affair">
              <input type="text" name="affair" placeholder="Affair" />
            </label>
            <label htmlFor="message">
              <textarea type="text" name="message" placeholder="Message" />
            </label>
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
