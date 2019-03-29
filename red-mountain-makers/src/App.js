import React, { Component } from 'react';
import Home from './Components/Home';
import Classes from './Components/Classes';
import Membership from './Components/Membership';
import Admin from './Components/Admin';
// import Supporters from './'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import Donate from './Components/Donate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faCubes, faFlask, faBoxOpen, faBook, faTools } from '@fortawesome/free-solid-svg-icons';

library.add(faLaptopCode, faCubes, faFlask, faBoxOpen, faBook, faTools)


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Classes" component={Classes} />
            <Route exact path="/Membership" component={Membership} />
            <Route exact path="/Donate" component={Donate} />
            <Route exact path="/Login" component={Login} />
            {/* <Route exact path="/Admin" component={Admin}/> */}
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
