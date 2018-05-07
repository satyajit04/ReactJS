import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
//import axios from "axios";
import Home from "./Home";
import Profile_details from "./Profile_details";
import Battle from "./Battle";
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>My-App</h1>
          <ul className="header">
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink to="/profile_details">PROFILE DETAILS</NavLink></li>
            <li><NavLink to="/battle">BATTLE</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/profile_details" component={Profile_details}/>
            <Route path="/battle" component={Battle}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

