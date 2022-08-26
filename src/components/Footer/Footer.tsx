import React from "react";
import styles from "./Footer.module.css";
import ToolTip from "../../UI/ToolTip/ToolTip";
const Logo = require("../../images/navbrand.png");

export default function Footer() {
  function toTop() {
    window.scrollTo(0, 0);
  }

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
            <img
              className={styles["footer-brand"]}
              src={Logo}
              alt="Melton Logo"
              onClick={toTop}
            />

            <p className={styles["footer-copyright__text"]}>
              Created by Paul Melton <br />
              <span className={styles.small}>Copyright &copy; 2022</span>
            </p>
          </div>
          <ul className={styles["footer--tags"]}>
            <li>
              <ToolTip content="Opens Github in new tab">
                <a
                  className={styles.link}
                  href="https://github.com/Melton-Paul"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </ToolTip>
            </li>
            <li>
              <ToolTip content="Opens LinkedIn in new tab">
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/paul-m-999361237/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </ToolTip>
            </li>
            <li onClick={() => copyToClipboard("Paul Blart#8933", "discord")}>
              <ToolTip content="Copies Discord username to clipboard">
                <span className={styles.link}>Discord</span>
              </ToolTip>
            </li>
            <li
              onClick={() =>
                copyToClipboard("melton.paul@hotmail.com", "email")
              }
            >
              <ToolTip content="Copies Email to Clipboard">
                <span className={styles.link}>Email</span>
              </ToolTip>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
