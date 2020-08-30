import React, { Component, Fragment } from "react";

import { BrowserRouter as HashRouter, Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Homepage from "./components/Homepage";
import WorkLockPage from "./pages/Worklock";
import QuivaPage from "./pages/Quiva";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch>
                <Route exact path="/">
                <Homepage />
              </Route>
              <Route
                exact
                path="/worklock"
                render={() => (
        
                    <WorkLockPage />
  
                )}
              />
              <Route
                exact
                path="/quiva"
                render={() => (
        
                    <QuivaPage />
  
                )}
              />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        </HashRouter>
    );

  }
}

export default App;
