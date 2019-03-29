import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Logo from '../assets/RMMLogo.png';
import '../scss/main.scss';


export default class TheNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <div>
                        <Navbar.Brand href="http://localhost:3000"><Image id="brand" className="d-flex" src={Logo} style={{ height: "auto", width: "3em" }}></Image></Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbarIcon"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="text-primary" href="http://localhost:3000">Home</Nav.Link>
                            <Nav.Link className="text-primary" href="http://localhost:3000/Classes">Classes</Nav.Link>
                            <Nav.Link className="text-primary" href="http://localhost:3000/Donate">Donate</Nav.Link>
                            <Nav.Link className="text-primary" href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
