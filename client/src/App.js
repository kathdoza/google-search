import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper";
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/saved" component={Saved} />
            </Switch>
          </Wrapper>

        </div>
      </Router>
    );
  }
}

export default App;