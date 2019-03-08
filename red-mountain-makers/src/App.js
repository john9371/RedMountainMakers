import React, { Component } from 'react';
<<<<<<< HEAD
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/footer'
import Classes from './Components/Classes'
import Membership from './Components/Membership'
import Contact from './Components/Contact'
 import Admin from './Components/Admin'
// import Supporters from './'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './Components/Login'
import './css/App.css';
import Supporters from './Components/supportersL'
=======
//import Navbar from './Components/Navbar'
//import Home from './Components/Home'
//import Footer from './Components/footer'
//import Classes from './Components/Classes'
// import Membership from './'
//import Contact from './Components/Contact'
//import Admin from './Components/Admin'
// import Supporters from './'
import { BrowserRouter as Router,/* Link,*/ Switch, Route } from "react-router-dom";
//import Login from './Components/Login'
import './css/App.css';
import Login from './Components/Login'
import ChangePassword from './Components/ChangePassword'
>>>>>>> backend


class App extends Component {
  render() {
    return (
      <Router>
        <>
          {/*<Navbar />*/}
            <Switch>
<<<<<<< HEAD
              <Route exact path="/" component={Home}/>
              <Route exact path="/Classes" component={Classes}/>
              <Route exact path="/Membership" component={Membership}/>
              <Route exact path="/Contact" component={Contact}/>
              <Route exact path="/Supporters" component={Supporters}/>
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/Admin" component={Admin}/>
            </Switch>
          {/* <Footer />  */}
=======
              {/*<Route exact path="/" component={Home}/>
              <Route exact path="/Classes" component={Classes}/>*/}
              {/* <Route exact path="/Membership" component={Membership}/> */}
              {/*<Route exact path="/Contact" component={Contact}/>*/}
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/changepassword" component={ChangePassword}/>
              {/* <Route exact path="/Supporters" component={Supporters}/> */}
              {/*<Route exact path="/Admin" component={Admin}/>*/}
            </Switch>
          {/* <Footer />   */}
>>>>>>> backend
        </>
      </Router>
    );
  }
}

export default App;
