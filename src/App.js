import React ,{ Component } from "react";

import './App.css';
import Home from "./Home";
import Plans from "./Plans";
import {BrowserRouter as Router , Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return(
      <div className="main">
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/plans' exact component={Plans} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
