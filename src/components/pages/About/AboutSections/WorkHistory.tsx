import React from "react";
import styles from "./WorkHistory.module.css";
import Card from "../../../UI/Card/Card";

const WorkHistory: React.FC<{}> = (props) => {
  return (
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
  );
};
export default WorkHistory;
