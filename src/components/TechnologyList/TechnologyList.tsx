import React from "react";
import HtmlLogo from "../../images/components/Html";
import CssLogo from "../../images/components/Css";
import GitLogo from "../../images/components/Git";
import JsLogo from "../../images/components/Js";
import ReactLogo from "../../images/components/React";
import TsLogo from "../../images/components/Ts";
import ReduxLogo from "../../images/components/Redux";
import Card from "../../UI/Card/Card";
import styles from "./TechnologyList.module.css";

const TechnologyList: React.FC<{}> = (props) => {
  return (
    <article className={styles.technology}>
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
    </article>
  );
};
export default TechnologyList;
