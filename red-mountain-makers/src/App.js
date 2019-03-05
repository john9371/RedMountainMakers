import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Classes from './Components/Classes'
// import Membership from './'
import Contact from './Components/Contact'
// import Supporters from './'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
//import Login from './Components/Login'
=======
// import Login from './Components/Login'
>>>>>>> 63b4ccd626b05cca11734aa59ae628cba881fdc6
import './css/App.css';
//import Login from './Components/Login'


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

            </Switch>
          <Footer />  
        </>
      </Router>
    );
  }
}

export default App;
