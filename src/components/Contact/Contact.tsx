import React from "react";
import EmailForm from "./EmailForm";
import styles from "./Contact.module.css";
import Button from "../../UI/Button/Button";

export default function Contact() {
  return (
    <article className={styles.contact}>
      <h2>Hire Me!</h2>
      <div className={styles["contact--options__container"]}>
        <EmailForm />
        <div className={styles["contact--options"]}>
          <h3 className={styles["contact--options__title"]}>
            Contact Me In <br /> Other Ways
          </h3>
          <ul className={styles["contact--options__tags"]}>
            <li>
              <Button
                className={styles.link}
                href="https://github.com/Melton-Paul"
                target="_blank"
                link={true}
              >
                Github
              </Button>
            </li>
            <li>
              <Button
                className={styles.link}
                href="https://www.linkedin.com/in/paul-m-999361237/"
                target="_blank"
                link={true}
              >
                LinkedIn
              </Button>
            </li>

            <li>
              <Button
                className={styles.link}
                href="mailto: melton.paul@hotmail.com"
                target="_blank"
                link={true}
              >
                Email
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
