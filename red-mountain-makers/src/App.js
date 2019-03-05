import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
//import Footer from './Components/Footer'
import Classes from './Components/Classes'
// import Membership from './'
import Contact from './Components/Contact'
import Admin from './Components/Admin'
// import Supporters from './'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
// import Login from './Components/Login'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Classes" component={Classes}/>
              {/* <Route exact path="/Membership" component={Membership}/> */}
              <Route exact path="/Contact" component={Contact}/>
              {/* <Route exact path="/Supporters" component={Supporters}/> */}
              <Route exact path="/Admin" component={Admin}/>
            </Switch>
          {/* <Footer />   */}
        </>
      </Router>
    );
  }
}

export default App;
