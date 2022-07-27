import React from "react";
import styles from "./About.module.css";
import HtmlLogo from "../../../images/components/Html";
import CssLogo from "../../../images/components/Css";
import GitLogo from "../../../images/components/Git";
import JsLogo from "../../../images/components/Js";
import ReactLogo from "../../../images/components/React";
import TsLogo from "../../../images/components/Ts";
import ReduxLogo from "../../../images/components/Redux";
import Card from "../../UI/Card/Card";

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
          <ul className={styles["technologies-list"] + " list"}>
            <li>
              <Card className={styles["technologies-list__item"]}>
                <HtmlLogo className={styles.svg} />
                <span>HTML</span>
              </Card>
            </li>
            <li>
              <Card className={styles["technologies-list__item"]}>
                <JsLogo className={styles.svg} />
                <span>Javascript</span>
              </Card>
            </li>
            <li>
              <Card className={styles["technologies-list__item"]}>
                <TsLogo className={styles.svg} />
                <span>TypeScript</span>
              </Card>
            </li>
            <li>
              <Card className={styles["technologies-list__item"]}>
                <ReactLogo className={styles.svg} />
                <span>React</span>
              </Card>
            </li>
            <li>
              <Card className={styles["technologies-list__item"]}>
                <ReduxLogo className={styles.svg} />
                <span>Redux</span>
              </Card>
            </li>
            <li>
              <Card className={styles["technologies-list__item"]}>
                <GitLogo className={styles.svg} />
                <span>Git</span>
              </Card>
            </li>
            <li>
              <Card className={styles["technologies-list__item"]}>
                <CssLogo className={styles.svg} />
                <span>CSS</span>
              </Card>
            </li>
          </ul>
        </li>
        <li className={styles["about--information__section"]}>
          <h3 className={styles["section-title"]}>Work History</h3>
          <ul className={styles["work-list"] + " list grid"}>
            <li>
              <Card className={styles["work-list__item"]}>
                <div className={styles["work-title"]}>
                  <h3>Big Cedar</h3>
                  <p className={styles["work-date"]}>Apr. 2019- Jul. 2020</p>
                  <p className={styles["work-job"]}>Room Service Server</p>
                </div>
                <p className={styles["work-desc"]}>Ate chese</p>
              </Card>
            </li>
            <li>
              <Card className={styles["work-list__item"]}>
                <div className={styles["work-title"]}>
                  <h3>Big Cedar</h3>
                  <p className={styles["work-date"]}>Apr. 2019- Jul. 2020</p>
                  <p className={styles["work-job"]}>Room Service Server</p>
                </div>
                <p className={styles["work-desc"]}>Ate chese</p>
              </Card>
            </li>
            <li>
              <Card className={styles["work-list__item"]}>
                <div className={styles["work-title"]}>
                  <h3>Big Cedar</h3>
                  <p className={styles["work-date"]}>Apr. 2019- Jul. 2020</p>
                  <p className={styles["work-job"]}>Room Service Server</p>
                </div>
                <p className={styles["work-desc"]}>Ate chese</p>
              </Card>
            </li>
          </ul>
        </li>
        <li className={styles["about--information__section"]}>
          <h3 className={styles["section-title"]}>Values</h3>
          <ul className={styles.values + " list grid"}>
            <li>
              <Card>
                <p>A healthy work life balance.</p>
              </Card>
            </li>
            <li>
              <Card>
                <p>Working with a team with good communication.</p>
              </Card>
            </li>
            <li>
              <Card>
                <p>Working Remote or Hybrid.</p>
              </Card>
            </li>
            <li>
              <Card>
                <p>I am willing to relocate.</p>
              </Card>
            </li>
            <li>
              <Card>
                <p>The ability to learn new concepts to add to my "toolbox".</p>
              </Card>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
