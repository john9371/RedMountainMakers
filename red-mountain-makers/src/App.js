import React, { Component } from 'react';
import Navbar from './Navbar'
import Home from './Home.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
