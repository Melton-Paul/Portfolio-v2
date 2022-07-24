import React from "react";
import styles from "./Footer.module.css";
const Logo = require("../../images/navbrand.png");

// TODO: Implement an API that sends emails to my email from within webpage, (replace email copy to
// clipboard button )

export default function Footer() {
  function copyToClipboard(textCopy: string, type: string): void {
    navigator.clipboard.writeText(textCopy);
    if (type === "discord") {
      alert("Discord username copied to clipboard.");
    } else if (type === "email") {
      alert("Email address copied to clipboard!");
    }
  }

  return (
    <div className={styles.footer}>
      <div
        className={styles["footer-color"]}
        style={{ backgroundColor: "pink" }}
      ></div>
      <div className={styles["footer-color"]}></div>
      <div
        className={styles["footer-color"]}
        style={{ backgroundColor: "#9ff7e8" }}
      ></div>
      <div className={styles.background}>
        <div className={styles["footer--content"]}>
          <div className={styles["footer-copyright"]}>
            <a href="#">
              <img
                className={styles["footer-brand"]}
                src={Logo}
                alt="Melton Logo"
              />
            </a>
            <p className={styles["footer-copyright__text"]}>
              Created by Paul Melton <br />
              <span className={styles.small}>Copyright &copy; 2022</span>
            </p>
          </div>
          <ul className={styles["footer--tags"]}>
            <li>
              <a
                className={styles.link}
                href="https://github.com/Melton-Paul"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/paul-m-999361237/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li
              className={styles.link}
              onClick={() => copyToClipboard("Paul Blart#8933", "discord")}
            >
              Discord
            </li>
            <li
              className={styles.link}
              onClick={() =>
                copyToClipboard("melton.paul@hotmail.com", "email")
              }
            >
              Email
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
