import React from 'react'
import ReactDOM from 'react-dom'
import Logo from '../assets/RMMLogo.png'
import { Navbar } from 'react-materialize'

function navbar() {
    return (
        <div>
            <Navbar className="navbar-fixed black darken-2">
                <nav className="black darken-2" role="navigation">
                    <div className="nav-wrapper container"><a id="logo-container" href="http://rmm-i-am-bham.herokuapp.com/" className="brand-logo #d50000 red-text"><img src={Logo} style={{ height: 60 }}></img></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/">Home</a></li>
                            <li><a className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Classes">Classes We Offer</a></li>
                            <li><a className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Membership">Membership</a></li>
                            <li><a className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/Supporters">Donate</a></li>
                            <li><a className="#d50000 red-text" href="http://rmm-i-am-bham.herokuapp.com/contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                {/* <div className="nav-wrapper">
                        {/* <a href="#!" class="brand-logo">Logo</a> 
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger" ></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="http://localhost:3000/">Home</a></li>
                            <li><a href="http://localhost:3000/Classes">Classes</a></li>
                            <li><a href="http://localhost:3000/Membership">Membership</a></li>
                            <li><a href="http://localhost:3000/Supporters">Supporters</a></li>
                            <li><a href="http://localhost:3000/Contact">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a> 
                </nav>
                    <ul id="mobile-demo" className="sidenav" >
                        <li><a className="#d50000 red-text" href="http://localhost:3000/" >Home</a></li>
                        <li><a className="#d50000 red-text" href="http://localhost:3000/Classes">Classes We Offer</a></li>
                        <li><a className="#d50000 red-text" href="http://localhost:3000/Membership">Membership</a></li>
                        <li><a className="#d50000 red-text" href="http://localhost:3000/Supporters">Support Us</a></li>
                        <li><a className="#d50000 red-text" href="http://localhost:3000/Contact">Contact</a></li>
                    </ul> */}
            </Navbar>

        </div>
    )
}



export default navbar