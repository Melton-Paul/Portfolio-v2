import React from "react";
import styles from "./About.module.css";
import Button from "../../UI/Button/Button";
const background = require("../../images/background.jpg");

export default function About() {
  return (
    <>
      <article className={styles.about}>
        <div className={styles["background-container"]}>
          <img src={background} alt="" className={styles.background} />
        </div>

        <p className={styles["about--greeting"]}>
          <h1>I am Paul Melton. </h1>
          A self-taught Front-End Developer with a passion for clean, reusable,
          and adaptable code. <br /> <br />I am open to learning new languages
          or adapting to the needs of a team- and being that I am self taught,
          means I can pick up languages on the fly! <br /> <br />
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
    </>
  );
}
