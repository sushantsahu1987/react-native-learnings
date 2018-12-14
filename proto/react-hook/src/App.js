import React, { Component } from "react";
import HookCount from "./HookCount";
import HookRef from "./HookRef";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Welcome to react hooks</h3>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={HookCount} />
            <Route path="/logout" component={HookRef} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
