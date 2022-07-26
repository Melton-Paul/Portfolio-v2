import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import ThemeChange from "../../UI/ThemeChange/ThemeChange";
const Logo = require("../../images/navbrand.png");

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/">
          <img
            className={styles["navbar-brand"]}
            src={Logo}
            alt="nav brand logo"
          />
        </Link>
        <ul className={styles["navbar-links"]}>
          <li>
            <Link className={styles["router-links"]} to="/">
              Welcome
            </Link>
          </li>
          <li>
            <Link className={styles["router-links"]} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <ThemeChange />
          </li>
        </ul>
      </div>
    </nav>
  );
}
