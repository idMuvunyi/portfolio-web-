import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Tech extends Component {
  render() {
    return (
      <div>
        <div className="project-header">
          <h2>Technical Skills</h2>
        </div>
        <div>
          <Grid className="tech-icons">
            <Cell col={2}>
              <i className="devicon-html5-plain"></i>
              <p>HTML5</p>
            </Cell>

            <Cell col={2}>
              <i className="devicon-css3-plain"></i>
              <p>CSS3</p>
            </Cell>

            <Cell col={2}>
              <i className="devicon-javascript-plain"></i>
              <p>JavaScript</p>
            </Cell>

            <Cell col={2}>
              <i className="devicon-bootstrap-plain"></i>
              <p>Bootstrap</p>
            </Cell>

            <Cell col={2}>
              <i
                className="devicon-react-original"
                style={{ fontSize: "35px" }}
              ></i>
              <p>React JS</p>
            </Cell>
            
            <Cell col={2}>
              <i
                className="devicon-nodejs-plain"
                style={{ fontSize: "40px" }}
              ></i>
              <p>Node JS</p>
            </Cell>
            
            <Cell col={2}>
              <i
                className="devicon-express-original"
                style={{ fontSize: "33px" }}
              ></i>
              <p>Express JS</p>
            </Cell>

            <Cell col={2}>
              <i className="devicon-php-plain" style={{ fontSize: "43px" }}></i>
              <p>PHP</p>
            </Cell>
            
            

            <Cell col={2}>
              <i
                className="devicon-java-plain"
                style={{ fontSize: "47px" }}
              ></i>
              <p>Java</p>
            </Cell>

            <Cell col={2}>
              <i
                className="devicon-mysql-plain"
                style={{ fontSize: "40px" }}
              ></i>
              <p>MySQL</p>
            </Cell>

            <Cell col={2}>
              <i
                className="devicon-mongodb-plain"
                style={{ fontSize: "40px" }}
              ></i>
              <p>MongoDB</p>
            </Cell>

            <Cell col={2}>
              <i className="devicon-git-plain" style={{ fontSize: "35px" }}></i>
              <p>Git</p>
            </Cell>
            
          </Grid>
        </div>
      </div>
    );
  }
}

export default Tech;
