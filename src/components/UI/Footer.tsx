import React from "react";
import styles from "./Footer.module.css";
const Logo = require("../../images/navbrand.png");

export default function Footer() {
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
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
