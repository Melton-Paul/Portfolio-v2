import React from "react";
import EmailForm from "./EmailForm";
import styles from "./Contact.module.css";
import Button from "../../UI/Button/Button";
import ToolTip from "../../UI/ToolTip/ToolTip";

export default function Contact() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <ToolTip content="Opens GitHub in new tab.">
                <Button
                  className={styles.link}
                  href="https://github.com/Melton-Paul"
                  target="_blank"
                  link={true}
                >
                  Github
                </Button>
              </ToolTip>
            </li>
            <li>
              <ToolTip content="Opens LinkedIn in new tab.">
                <Button
                  className={styles.link}
                  href="https://www.linkedin.com/in/paul-m-999361237/"
                  target="_blank"
                  link={true}
                >
                  LinkedIn
                </Button>
              </ToolTip>
            </li>
            <li>
              <ToolTip content="Attempts to open your logged in email service (Clipboard option in footer).">
                <Button
                  className={styles.link}
                  href="mailto: melton.paul@hotmail.com"
                  target="_blank"
                  link={true}
                >
                  Email
                </Button>
              </ToolTip>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
