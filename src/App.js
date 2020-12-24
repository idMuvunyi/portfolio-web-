import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import Footers from "./components/footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link style={{ textDecoration: "none" }} to="/aboutme">
                About Me
              </Link>
              <Link style={{ textDecoration: "none" }} to="/projects">
                Projects
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            className="drawer-color"
            title={
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            }
          >
            <Navigation>
              <Link style={{ textDecoration: "none" }} to="/aboutme">
                About Me
              </Link>
              <Link style={{ textDecoration: "none" }} to="/projects">
                Projects
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
            <div>
              <Footers />
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
