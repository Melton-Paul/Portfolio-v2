import React from "react";
import styles from "./About.module.css";
import TechnologyList from "./AboutSections/TechnologyList";
import Projects from "../Projects/Projects";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>Welcome</h2>
      <ul className="list">
        <li className={styles["about--information__section"]}>
          <p className={styles["about--greeting"]}>
            I am a self-taught Front-End Developer, with a passion for clean,
            reusable, and adaptable code. <br /> <br />I am open to learning new
            languages or adapting to the needs of a team- and being that I am
            self taught, means I can pick up languages on the fly! <br /> <br />
            For more information on me, check out my LinkedIn
          </p>
          <Button
            className={styles["about--greeting__button"]}
            link={true}
            href="https://www.linkedin.com/in/paul-m-999361237/"
            target="_blank"
          >
            Go to LinkedIn
          </Button>
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
          <Link to="/contact" className={styles.CTA}>
            <h3>Thanks for your interest in me!</h3>
            <Button className={styles["CTA-button"]}>Get In Contact</Button>
          </Link>
        </li>
      </ul>
    </section>
  );
}
