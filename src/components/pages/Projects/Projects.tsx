import React from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import styles from "./Projects.module.css";
const ContactPagePreview = require("../../../images/contactbookprev.png");
const MovieListPreview = require("../../../images/movielist.png");
const QuizzicalPreview = require("../../../images/quizzical.png");
const WebConceptPreview = require("../../../images/webconcept.png");

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles["projects-title"]}>
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
              <h3 className={styles["project-title"]}>Twitch Contacts</h3>
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
                  information on members of your community is ever-growing. This
                  server backed single page responsive React application allows
                  for users to log in and have a customizable contact catalog to
                  keep track of their friends, viewers, and community. It
                  implements customized inputs, to be able to keep track of
                  information based on user specific needs.
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
            <div className={styles.img}>
              <img
                src={MovieListPreview}
                alt="A preview of Movie List Maker website."
              />
            </div>
            <div className={styles["project-information"]}>
              <h3 className={styles["project-title"]}>Movie Watchlist</h3>
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
                  Ever heard of a movie and wanted to watch it later but forgot
                  the name before you got a chance to? This single page React
                  application allows for users to search the web for movies and
                  create a customized user "Watch List". The application works
                  with the OMDb API to search for exact and related titles and
                  to display all the information pertaining to each movie.
                </p>
              </div>
              <div className={styles["button-container"]}>
                <Button
                  href="https://movielistmaker.netlify.app/"
                  target="_blank"
                  className={styles.button}
                  link={true}
                >
                  Preview
                </Button>
                <Button
                  href="https://github.com/Melton-Paul/Movie-Finder-React-"
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
            <div className={styles.img}>
              <img
                src={QuizzicalPreview}
                alt="A preview of Movie List Maker website."
              />
            </div>
            <div className={styles["project-information"]}>
              <h3 className={styles["project-title"]}>Quizzical</h3>
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
                  Ever wanted to test your knowledge through random facts? This
                  React app fetches information from a 3rd party API and
                  transforms it into questions with randomized answers that can
                  be answered and scored.
                </p>
              </div>
              <div className={styles["button-container"]}>
                <Button
                  href="https://quizzicalme.netlify.app"
                  target="_blank"
                  className={styles.button}
                  link={true}
                >
                  Preview
                </Button>
                <Button
                  href="https://github.com/Melton-Paul/Quizzical"
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
            <div className={styles.img}>
              <img
                src={WebConceptPreview}
                alt="A preview of Movie List Maker website."
              />
            </div>
            <div className={styles["project-information"]}>
              <h3 className={styles["project-title"]}>
                Cloud Host Web Concept
              </h3>
              <div className={styles["project-information__section"]}>
                <h4>ToolBox</h4>
                <ul className={styles["project-information__toolbox"]}>
                  <li>Html / CSS</li>
                </ul>
              </div>
              <div className={styles["project-information__section"]}>
                <h4>Description</h4>
                <p>
                  A simple and pure HTML and CSS brochure website. This
                  application focuses solely on design, responsiveness, and user
                  experience.
                </p>
              </div>
              <div className={styles["button-container"]}>
                <Button
                  href="https://webhostconcept.netlify.app/"
                  target="_blank"
                  className={styles.button}
                  link={true}
                >
                  Preview
                </Button>
                <Button
                  href="https://github.com/Melton-Paul/WebHostConcept"
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
      </ul>
    </section>
  );
}
