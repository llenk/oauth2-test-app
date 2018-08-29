import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import LoginView from './components/LoginView';
import WallView from './components/WallView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/login"
              component={LoginView}
            />
            <Route
              path="/"
              component={WallView}
            />
            <Route
              render={() => <h1>404</h1>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
