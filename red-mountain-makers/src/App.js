import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home.js'
import Footer from './Components/footer'

//import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './Components/Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        {/* <Login /> */}
        <Navbar />
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
