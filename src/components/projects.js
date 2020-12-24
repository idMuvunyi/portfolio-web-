import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  toogleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        E-COMMERCE WEB APPLICATION
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                        Fullstack platform where we list variety of electronic devices &
                        technologies along with the price for products ad. built with 
                        MERN stack.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="https://laanetech.herokuapp.com/"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              Live View
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        SECURITY COMPANY WEBSITE
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          A company's website built with HTML/CSS,
                          Bootstrap,Javascript for font-end and used PHP and
                          MySQL for back end.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="https://www.quickstarservice.com/"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              Live View
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        RESTAURANT WEB APPLICATION
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          Online presence for a restaurant where customers can
                          find more information on food and drinks available by
                          visual confirmation.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="https://github.com/idMuvunyi/The-spici-Restaurant-Web-App"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              GitHub
                            </a>
                          </div>
                          <div>
                            <a
                              href="https://thespiciresto.netlify.app/"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              Live View
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        TASK MONITORING APP
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                        A web application (Mern Stack) to help track of one's daily 
                          tasks. it's error free since its calculations are
                          done automatically by program.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="https://github.com/idMuvunyi/Task-manager-Application"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              GitHub
                            </a>
                          </div>
                          <div>
                            <a
                              href="https://lit-eyrie-59863.herokuapp.com/"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              Live View
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        PROVISIONAL DRIVING LICENSE TRAINING
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          This web application helps provisional driving license
                          teachers at one of kigali's driving schools to train
                          their students anytime from anywhere.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                         

                          <div>
                            <a
                              href="https://github.com/idMuvunyi/Online-provisional-driving-license-training-system"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              GitHub
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        POLICE STATION RECORD MANAGER APP
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          This is a desktop application to manage files within
                          police station. The app is built with Java and MySQL
                          as database for data storage.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">

                        <div>
                            <a
                              href="https://github.com/idMuvunyi/Police-Station-Record-Keeping-System"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              GitHub
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        E-COMMERCE WEB APPLICATION
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                        Fullstack platform where we list variety of electronic devices &
                        technologies along with the price for products ad. built with 
                        MERN stack.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="https://laanetech.herokuapp.com/"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              Live View
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        RESTAURANT WEB APPLICATION
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          Online presence for a restaurant where customers can
                          find more information on food and drinks available by
                          visual confirmation.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="https://github.com/idMuvunyi/The-spici-Restaurant-Web-App"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              GitHub
                            </a>
                          </div>
                          <div>
                            <a
                              href="https://thespiciresto.netlify.app/"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              Live View
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        TASK MONITORING APP
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          A web application (Mern Stack) to help track of one's daily 
                          tasks. it's error free since its calculations are
                          done automatically by program.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="https://github.com/idMuvunyi/Task-manager-Application"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              GitHub
                            </a>
                          </div>
                          <div>
                            <a
                              href="https://lit-eyrie-59863.herokuapp.com/"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              Live View
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        SECURITY COMPANY WEBSITE
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          A company's website built with HTML/CSS,
                          Bootstrap,Javascript for font-end and used PHP and
                          MySQL for back end.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="https://www.quickstarservice.com/"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              Live View
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        PROVISIONAL DRIVING LICENSE TRAINING
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          This web application helps provisional driving license
                          teachers at one of kigali's driving schools to train
                          their students anytime from anywhere.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                         

                          <div>
                            <a
                              href="https://github.com/idMuvunyi/Online-provisional-driving-license-training-system"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              GitHub
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <div className="card">
                      <div
                        className="card-header text-white bg-info "
                        style={{ textAlign: "center" }}
                      >
                        POLICE STATION RECORD MANAGER APP
                      </div>
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">
                          This is a desktop application to manage files within
                          police station. The app is built with Java and MySQL
                          as database for data storage.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">

                        <div>
                            <a
                              href="https://github.com/idMuvunyi/Police-Station-Record-Keeping-System"
                              rel="noopener noreferrer"
                              target="blank"
                              className="btn btn-sm btn-outline-success"
                            >
                              GitHub
                            </a>
                          </div>
                          <small className="text-muted">Status : done</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="project-header">
          <h2>Projects</h2>
        </div>
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab style={{ textDecoration: "none" }}>ALL</Tab>
            <Tab style={{ textDecoration: "none" }}>React / Node JS</Tab>
            <Tab style={{ textDecoration: "none" }}>PHP</Tab>
            <Tab style={{ textDecoration: "none" }}>JAVA</Tab>
          </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content"> {this.toogleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
