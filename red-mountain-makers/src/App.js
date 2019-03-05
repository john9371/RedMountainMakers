import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
//import Footer from './Components/Footer'
import Classes from './Components/Classes'
// import Membership from './'
import Contact from './Components/Contact'
// import Supporters from './'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from './Components/Login'
import './css/App.css';
=======
//import Login from './Components/Login'
import './css/App.css';


>>>>>>> 4d63487166c5a973a7ffb79775f329b1e9d84632

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
          {/* <Footer />   */}
        </>
      </Router>
    );
  }
}

export default App;
