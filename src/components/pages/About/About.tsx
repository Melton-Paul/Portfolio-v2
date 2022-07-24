import React from "react";
import styles from "./About.module.css";
import HtmlLogo from "../../../images/components/Html";
import CssLogo from "../../../images/components/Css";
import GitLogo from "../../../images/components/Git";
import JsLogo from "../../../images/components/Js";
import ReactLogo from "../../../images/components/React";
import TsLogo from "../../../images/components/Ts";
import ReduxLogo from "../../../images/components/Redux";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>About</h2>
      <p>
        My name is Paul Melton, I am a self-taught Front-End Developer, with a
        passion for clean, reusable, and adaptable code. <br /> <br />I am open
        to learning new languages or adapting to the needs of a team- and being
        that I am self taught, means I can pick up languages on the fly!
      </p>
      <ul className={styles["about--information"]}>
        <li className={styles["about--information__section"]}>
          <h3>Technologies</h3>
          <ul className={styles["technologies-list"]}>
            <li className={styles["technologies-list--item"]}>
              <HtmlLogo className={styles.svg} />
              <span>HTML</span>
            </li>
            <li className={styles["technologies-list--item"]}>
              <JsLogo className={styles.svg} />
              <span>Javascript</span>
            </li>
            <li className={styles["technologies-list--item"]}>
              <TsLogo className={styles.svg} />
              <span>TypeScript</span>
            </li>
            <li className={styles["technologies-list--item"]}>
              <ReactLogo className={styles.svg} />
              <span>React</span>
            </li>
            <li className={styles["technologies-list--item"]}>
              <ReduxLogo className={styles.svg} />
              <span>Redux</span>
            </li>
            <li className={styles["technologies-list--item"]}>
              <GitLogo className={styles.svg} />
              <span>Git</span>
            </li>
            <li className={styles["technologies-list--item"]}>
              <CssLogo className={styles.svg} />
              <span>CSS</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>Work History</h3>
        </li>
        <li>
          <h3>Values</h3>
        </li>
      </ul>
    </section>
  );
}
