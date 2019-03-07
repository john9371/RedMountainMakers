import React from 'react'
import ReactDOM from 'react-dom'
import Logo from '../assets/RMMLogo.png'


function Navbar() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="black darken-2 z-depth-4" role="navigation">
                        <div className="nav-wrapper container"><a id="logo-container" href="http://localhost:3000/" className="brand-logo #d50000 red-text left"><img src={Logo} style={{height:60}}></img></a>
                            <ul className="right ">
                                <li><a className="#d50000 red-text" href="http://localhost:3000/">Home</a></li>
                                <li><a className="#d50000 red-text" href="http://localhost:3000/Classes">Classes We Offer</a></li>
                                <li><a className="#d50000 red-text" href="http://localhost:3000/Membership">Membership</a></li>
                                <li><a className="#d50000 red-text" href="#">Donate</a></li>
                                <li><a className="#d50000 red-text" href="http://localhost:3000/contact">Contact</a></li>
                            </ul>
                        </div>
                        {/* <ul id="nav-mobile" className="sidenav">
                            <li><a className="#d50000 red-text" href="http://localhost:3000/">Home</a></li>
                            <li><a className="#d50000 red-text" href="http://localhost:3000/Classes">Classes We Offer</a></li>
                            <li><a className="#d50000 red-text" href="http://localhost:3000/Membership">Membership</a></li>
                            <li><a className="#d50000 red-text" href="#">Donate</a></li>
                            <li><a className="#d50000 red-text" href="http://localhost:3000/contact">Contact</a></li>
                        </ul>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                    </nav>
                </div>    
            </div>
        )
    }



export default Navbar