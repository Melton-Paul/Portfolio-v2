import React from "react";
import styles from "./About.module.css";
import TechnologyList from "../TechnologyList/TechnologyList";
import Projects from "../Projects/Projects";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <article className={styles.about}>
      <p className={styles["about--greeting"]}>
        My name is Paul Melton. I am a self-taught Front-End Developer, with a
        passion for clean, reusable, and adaptable code. <br /> <br />I am open
        to learning new languages or adapting to the needs of a team- and being
        that I am self taught, means I can pick up languages on the fly! <br />{" "}
        <br />
        For more information on me, check out my LinkedIn
      </p>
      <Button
        className={styles["about--greeting__button"]}
        link={true}
        href="https://www.linkedin.com/in/paul-m-999361237/"
        target="_blank"
      >
        Paul Melton on LinkedIn
      </Button>
    </article>
  );
}
