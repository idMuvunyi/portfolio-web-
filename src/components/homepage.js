import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Projects from "./projects";
import Contact from "./contact";
import Tech from "./technologies";

class HomePage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src=""
              alt="profile"
              className="profile-pic"
            />
          </Cell>

          <div className="social-links">
            <a
              href=""
              rel="noopener noreferrer"
              target="blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>

            <a
              href=""
              rel="noopener noreferrer"
              target="blank"
            >
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>

            <a
              href=""
              rel="noopener noreferrer"
              target="blank"
            >
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
          </div>

          <div className="banner-text">
            <h2>Software Engineer</h2>
            <hr />
            <p>
              Hi, my name is{" "}
              <strong style={{ color: "#595486" }}>John Doe</strong>. I
              am a full stack software engineer with speciality in web
              development I am comfortable with different web technologies both
              front-end and back-end. I have some experience in desktop based
              application development as well. Passion about solving real world
              prolems is what motivated me to get in this profession, being able
              to come with solutions is what I view as success. I usually spend
              my days coding something that interests me or learning new tech.
            </p>
          </div>
        </Grid>

        <div>
          <div>
            <Projects />
          </div>

          <div>
            <Tech />
          </div>
          <br />
          <hr />

          <div>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
