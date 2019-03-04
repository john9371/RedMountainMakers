import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Classes from './Components/Classes'
// import Membership from './'
import Contact from './Components/Contact'
// import Supporters from './'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './Components/Login'

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
            <Switch>
              <Route exact path="/" Component={Home}/>
              <Route exact path="/Classes" Component={Classes}/>
              {/* <Route exact path="/Membership" Component={Membership}/> */}
              <Route exact path="/Contact" Component={Contact}/>
              {/* <Route exact path="/Supporters" Component={Supporters}/> */}

            </Switch>
          <Footer />  
        </>
      </Router>
    );
  }
}

export default App;
