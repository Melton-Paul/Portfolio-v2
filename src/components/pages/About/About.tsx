import React from "react";
import styles from "./About.module.css";
import TechnologyList from "./AboutSections/TechnologyList";
import WorkHistory from "./AboutSections/WorkHistory";
import ValuesList from "./AboutSections/Values";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>About</h2>
      <ul className={styles["about--information"] + " list"}>
        <li className={styles["about--information__section"]}>
          <p className={styles["about--greeting"]}>
            I am a self-taught Front-End Developer, with a passion for clean,
            reusable, and adaptable code. <br /> <br />I am open to learning new
            languages or adapting to the needs of a team- and being that I am
            self taught, means I can pick up languages on the fly!
          </p>
        </li>
        <li className={styles["about--information__section"]}>
          <h3 className={styles["section-title"]}>Technologies</h3>
          <TechnologyList />
        </li>
        <li className={styles["about--information__section"]}>
          <h3 className={styles["section-title"]}>Work History</h3>
          <WorkHistory />
        </li>
        <li className={styles["about--information__section"]}>
          <h3 className={styles["section-title"]}>Values</h3>
          <ValuesList />
        </li>
      </ul>
    </section>
  );
}
