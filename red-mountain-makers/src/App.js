import React, { Component } from 'react';
import Navbar from './Navbar'
import Home from './Home.js'

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './Components/Login'
import './App.css';

class App extends Component {
  render() {
    return (<>
    <Login />
      <div className="App">
        <Navbar />
        <Home />
      </div>
      </>
    );
  }
}

export default App;
