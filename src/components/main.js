import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./homepage";
import About from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/aboutme" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Main;
