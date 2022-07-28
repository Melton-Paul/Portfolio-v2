import React from "react";
import styles from "./Values.module.css";
import Card from "../../../UI/Card/Card";

const ValuesList: React.FC = () => {
  return (
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
  );
};

export default ValuesList;
