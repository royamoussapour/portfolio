import React from "react";
import "./Home.scss";
import Fade from "react-reveal/Fade";

const Home = () => {
  const name = "Roya Moussapour";
  const resumeUrl =
    "https://drive.google.com/file/d/1P56wubhjLR9egjqp8GwB7-vAm19wYq64/view?usp=sharing";

  return (
    <>
      <Fade cascade delay={600}>
        <section className="title-section">
          <p className="introduction">Hello! My name is</p>
          <h1>{name}.</h1>
          <h1 className="sub-header-title">Researching and designing learning opportunities.</h1>
          <p className="description-title">
            I'm a{" "}
            <span>
              <b>graduate student</b>
            </span>{" "}
            and researcher at MIT, where I design, implement, and research the future of teacher learning.
          </p>
          <div>
            <Fade bottom cascade delay={800}>
              <a href="mailto:roya.moussapour@gmail.com" className="button-link">
                <button className="contact-button">Get In Touch</button>
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-link"
              >
                <button className="contact-button">Resume</button>
              </a>
            </Fade>
          </div>
        </section>
      </Fade>
      <div className="orb"></div>
    </>
  );
};

export default Home;
