import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/footer'
import Classes from './Components/Classes'
import Membership from './Components/Membership'
import Admin from './Components/Admin'
// import Supporters from './'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './Components/Login'
import './css/App.css';
import Supporters from './Components/supportersL'
import Checkout from './Components/Checkout2'


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Classes" component={Classes}/>
              <Route exact path="/Membership" component={Membership}/>
              <Route exact path="/Supporters" component={Supporters}/>
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/Checkout" component={Checkout}/>
              {/* <Route exact path="/Admin" component={Admin}/> */}
            </Switch>
          <Footer /> 
        </>
      </Router>
    );
  }
}

export default App;
