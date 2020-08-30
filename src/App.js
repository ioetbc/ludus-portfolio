import React, { Component, Fragment } from "react";

import { BrowserRouter as HashRouter, Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Homepage from "./components/Homepage";
import WorkLockPage from "./pages/Worklock";
import QivaPage from "./pages/Qiva";
import OrangeryPage from "./pages/Orangery";
import ShleterBoxPage from "./pages/Shelter-Box";
import LockdownPage from "./pages/Lockdown-ludere";
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
                path="/qiva"
                render={() => (
        
                    <QivaPage />
  
                )}
              />
              <Route
                exact
                path="/orangery"
                render={() => (
                    <OrangeryPage />
  
                )}
              />
              <Route
                exact
                path="/shelter-box"
                render={() => (
                    <ShleterBoxPage />
  
                )}
              />
              <Route
                exact
                path="/lockdown-ludere"
                render={() => (
                    <LockdownPage />
  
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
