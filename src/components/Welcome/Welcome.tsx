import React from "react";
import styles from "./Welcome.module.css";
import TechnologyList from "../TechnologyList/TechnologyList";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

export default function Welcome() {
  function sendAnalytics() {
    ReactGA.event({
      category: "Button Clicks",
      action: "Contact",
    });
  }

  return (
    <section className={styles.welcome}>
      <h2>Welcome</h2>
      <ul className="list">
        <li className={styles["about--information__section"]}>
          <About />
        </li>
        <li className={styles["about--information__section"]}>
          <h3 className={styles["section-title"]}>Technologies</h3>
          <TechnologyList />
        </li>
        <li className={styles["about--information__section"]}>
          <h3 className={styles["section-title"]}>Projects</h3>
          <Projects />
        </li>
        <li className={styles["about--information__section"]}>
          <Link to="/contact" className={styles.CTA} onClick={sendAnalytics}>
            <h3>Thanks for your interest in me!</h3>
            <Button className={styles["CTA-button"]}>Get In Contact</Button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
