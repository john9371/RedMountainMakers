import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Home.js'
import Contact from './Components/Contact'

//import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
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
