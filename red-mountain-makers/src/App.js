import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './Components/Login'
import './App.css';

class App extends Component {
  render() {
    return (<>
    <Login />
      <div className="App">

          {//<Route exact path="/home/" component={exfilm} />
          }
      </div>
      </>
    );
  }
}

export default App;
