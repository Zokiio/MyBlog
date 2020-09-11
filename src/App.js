import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./pages/home";

import PageRenderer from './page-renderer'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/:page" component={PageRenderer} /> 
        <Route path="/" component={Home} />
        <Route component={() => 404} />
      </Switch>
    </Router>
  );
};

export default App;
