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
              I'm a master's student at MIT, where I am a mixed-methods researcher at the{" "}
              <a
                href="https://tsl.mit.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="hyperlink"
              >
                Teaching Systems Lab
              </a>{" "}
              . At the Teaching Systems Lab, I design and research the future of 
              teacher learning. My work is interdisciplinary and holds equity and access 
              at the center.
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
              </a>
              with a degree in physics and education, I worked at{" "}
              <a
                href="https://compasslexecon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hyperlink"
              >
                Compass Lexecon{" "}
              </a>{" "}
              where I worked on data analysis and visualization in 
              regulatory and litigation matters.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <section className="skills">
              <ul>
                <li>
                  <span>▹</span> R</span>
                </li>
                <li>
                  <span>▹</span> React & Redux
                </li>
                <li>
                  <span>▹</span> Angular 7+
                </li>
                <li>
                  <span>▹</span> Chai & Mocha
                </li>
              </ul>
              <ul>
                <li>
                  <span>▹</span> Node.js
                </li>
                <li>
                  <span>▹</span> PostgreSQL
                </li>
                <li>
                  <span>▹</span> .NET Core
                </li>
                <li>
                  <span>▹</span> Jest & Enzyme
                </li>
              </ul>
            </section>
          </section>
          <section>
            <img src={headshot} alt="Headshot of Edwin" />
          </section>
        </section>
      </Fade>
    </main>
  );
};

export default AboutMe;
