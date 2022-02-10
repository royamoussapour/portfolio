import React from "react";
import "./AboutMe.scss";
import headshot from "../../assets/headshot.jpg";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  return (
    <main className="AboutMe" name="AboutMe">
      <Fade cascade>
        <Fade bottom></Fade>
        <section className="about-box">
          <section className="about-description">
            <h2>
              <span>01. </span>About Me
            </h2>
            <p>
              I'm a mixed-methods education researcher at{" "}
              <a
                href="https://lumenlearning.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hyperlink"
              >
                Lumen Learning
              </a>
              , where I lead internal research efforts to make sure our courses are delivering best-in-class learning experiences for all students. My work is interdisciplinary and holds equity and access 
              at its center.
            </p>
            <p>
              After graduating from{" "}
              <a
                href="https://bowdoin.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="hyperlink"
              >
                Bowdoin College
              </a>{" "}
              with a degree in physics and education, I worked as a data analyst for a number of years before pursuing my master's in Comparative Media Studies at the {" "}
              <a
                href="http://mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hyperlink"
              >
                Massachusetts Institute of Technology
              </a>{" "}
              . At MIT, I worked as a researcher in the {" "}
              <a
                href="https://tsl.mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hyperlink"
              >
                Teaching Systems Lab
              </a>{" "}
               for two years designing and implementing the future of teacher learning. 
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <section className="skills">
              <ul>
                <li>
                  <span>▹</span> R 
                </li>
                <li>
                  <span>▹</span> Tableau
                </li>
                <li>
                  <span>▹</span> SQL
                </li>
                <li>
                  <span>▹</span> Miro
                </li>
              </ul>
              <ul>
                <li>
                  <span>▹</span> Adobe XD
                </li>
                <li>
                  <span>▹</span> Figma
                </li>
                <li>
                  <span>▹</span> ATLAS.ti
                </li>
                <li>
                  <span>▹</span> NVivo
                </li>
              </ul>
            </section>
          </section>
          <section>
            <img src={headshot} alt="Headshot of Roya" />
          </section>
        </section>
      </Fade>
    </main>
  );
};

export default AboutMe;
