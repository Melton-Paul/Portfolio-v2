import React from "react";
import Card from "../../UI/Card/Card";
import styles from "./Projects.module.css";
import Button from "../../UI/Button/Button";
const ContactPagePreview = require("../../../images/contactbookprev.png");

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles["projects-title"]}>
        <h2>Projects</h2>
        <p>
          This page is constantly being updated as I learn new concepts and
          develop more projects.
        </p>
      </div>
      <ul className={styles["projects-container"]}>
        <li>
          <Card className={styles.project}>
            <div className={styles.img}>
              <img
                src={ContactPagePreview}
                alt="A preview of Twitch Contact Page website."
              />
            </div>
            <div className={styles["project-information"]}>
              <h3>Twitch Contacts</h3>
              <div className={styles["project-information__section"]}>
                <h4>ToolBox</h4>
                <ul className={styles["project-information__toolbox"]}>
                  <li>Javascript</li>
                  <li>Html / CSS</li>
                  <li>React</li>
                </ul>
              </div>
              <div className={styles["project-information__section"]}>
                <h4>Description</h4>
                <p>
                  As a Twitch streamer, the need to manage and maintain
                  information on members of your community is ever-growing.
                  Every day multiple new faces pop up in streams, talking about
                  their information and life events, it is just impossible to
                  keep track of all that information mentally. This app solves
                  this issue, just fill in their information and it is saved by
                  our database for you to later search!
                </p>
              </div>
              <div className={styles["button-container"]}>
                <Button
                  href="https://twitchcontacts.netlify.app/"
                  target="_blank"
                  className={styles.button}
                  link={true}
                >
                  Preview
                </Button>
                <Button
                  href="https://github.com/Melton-Paul/Twitch-Contact-Book"
                  target="_blank"
                  className={styles.button}
                  link={true}
                >
                  Github Code
                </Button>
              </div>
            </div>
          </Card>
        </li>
        <li>
          <Card className={styles.project}>
            <div className={styles.img}></div>
            <div className={styles["project-information"]}>
              <h3>Project Name</h3>
              <div className={styles["project-information__section"]}>
                <h4>ToolBox</h4>
                <ul className={styles["project-information__toolbox"]}>
                  <li>Javascript</li>
                  <li>Html / CSS</li>
                  <li>React</li>
                </ul>
              </div>
              <div className={styles["project-information__section"]}>
                <h4>Description</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto exercitationem porro excepturi dicta similique molestias
                  ab. Recusandae, in minima. Incidunt!
                </p>
              </div>
              <div className={styles["button-container"]}>
                <a
                  href="https://twitchcontacts.netlify.app/"
                  target="_blank"
                  className={styles.button}
                  rel="noreferrer"
                >
                  Preview
                </a>
                <a
                  href="https://github.com/Melton-Paul/Twitch-Contact-Book"
                  target="_blank"
                  className={styles.button}
                  rel="noreferrer"
                >
                  Github Code
                </a>
              </div>
            </div>
          </Card>
        </li>
      </ul>
    </section>
  );
}
