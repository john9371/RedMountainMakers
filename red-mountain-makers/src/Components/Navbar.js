import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Logo from '../assets/RMMLogo.png';
import '../scss/main.scss';


export default class TheNavbar extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" onToggle={this.toggleClass}>
                    <div>
                        <Navbar.Brand href="http://rmm-i-am-bham.herokuapp.com"><Image id="brand" className="d-flex" src={Logo} style={{ height: "auto", width: "3em" }}></Image></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbarIcon" onClick={this.toggleClass}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="text-primary mr-3" href="http://rmm-i-am-bham.herokuapp.com">Home</Nav.Link>
                            <Nav.Link className="text-primary mr-3" href="http://rmm-i-am-bham.herokuapp.com/Classes">Classes</Nav.Link>
                            <Nav.Link className="text-primary mr-3" href="http://rmm-i-am-bham.herokuapp.com/Donate">Donate</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
