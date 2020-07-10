import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Homepage from "./components/Homepage";
import WorkLockPage from "./components/case-studies/Worklock";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={30000}>
            <Switch>
              <Route path="/worklock">
                <WorkLockPage />
              </Route>
              <Route exact path="/">
                <Homepage />
              </Route>
            </Switch>
          </CSSTransition>
          </TransitionGroup>
        )}
        />x
        </Router>
    );
  }
}

export default App;
