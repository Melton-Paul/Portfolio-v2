import React, { ReactNode } from "react";
import styles from "./Card.module.css";

const Card: React.FC<{ children: ReactNode; className?: string }> = (props) => {
  return (
    <div className={styles.card + " " + props.className}>{props.children}</div>
  );
};

export default Card;
