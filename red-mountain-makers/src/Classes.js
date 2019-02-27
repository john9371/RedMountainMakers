import React, { Component } from 'react';
import './App.css';
import './css/materialize.css'

class App extends Component {
  render() {
    return (
        <body>
        <div className="navbar-fixed">
            <nav className="#d50000 red accent-4 z-depth-4" role="navigation">
                <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo black-text text-darken-2">logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="black-text text-darken-2" href="#">Class We Offer</a></li>
                        <li><a className="black-text text-darken-2" href="#">Membership</a></li>
                        <li><a className="black-text text-darken-2" href="#">Contact</a></li>
                    </ul>
                </div>
                <ul id="nav-mobile" className="sidenav">
                    <li><a className="black-text text-darken-2" href="#">Navbar Link</a></li>
                    <li><a className="black-text text-darken-2" href="#">Navbar Link</a></li>
                    <li><a className="black-text text-darken-2" href="#">Navbar Link</a></li>
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
       </nav>
        </div>
        
        <br></br>
        <h3>Classes at the Space</h3>
        <div id="content" className="page-wrap">
            <li><a className="black-text text-darken-2" href="#"> Tool Training: WoodShop 101</a></li>
            <li><a className="black-text text-darken-2" href="#">Tool Training: Learn to Wield</a></li>
            <li><a className="black-text text-darken-2" href="#">Tool Training: 3D Printers</a></li>
            <li><a className="black-text text-darken-2" href="#">Tool Training: 3D Modeling</a></li>
            <li><a className="black-text text-darken-2" href="#">Programming and Hardware</a></li>
            <li><a className="black-text text-darken-2" href="#">Fibers!</a></li>
            <li><a className="black-text text-darken-2" href="#">Bike Technology</a></li>
            <li><a className="black-text text-darken-2" href="#">Wearable Technology</a></li>
            <li><a className="black-text text-darken-2" href="#">Ceramics</a></li>
            <li><a className="black-text text-darken-2" href="#">Cosplay!</a></li>
        </div>
        </body>
    );
  }
}

export default App;
