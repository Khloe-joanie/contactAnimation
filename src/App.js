/** @format */

import React, { Component } from "react";
import "./css/style.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurStaff from "./pages/OurStaff";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/contactAnimation/" exact component={Home} />
            <Route path="/contactAnimation/about" component={About} />
            <Route path="/contactAnimation/ourstaff" component={OurStaff} />
            <Route path="/contactAnimation/contact" component={Contact} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
