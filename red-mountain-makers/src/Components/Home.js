import React, { Component } from 'react';
import '../scss/main.scss';
import { Row, Col, Button, Container, ButtonToolbar, Image, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer.js';
import Logo from '../assets/RMMLogo.png'



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }
  toggleClass() {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (

      <>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" onToggle={this.toggleClass}>
          <div>
            <Navbar.Brand href="http://rmm-i-am-bham.herokuapp.com"><Image id="brand" className="d-flex" src={Logo} style={{ height: "auto", width: "3em" }}></Image></Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbarIcon" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-primary mr-3" href="http://rmm-i-am-bham.herokuapp.com">Home</Nav.Link>
              <Nav.Link className="text-primary mr-3" href="http://rmm-i-am-bham.herokuapp.com/Classes">Classes</Nav.Link>
              <Nav.Link className="text-primary mr-3" href="http://rmm-i-am-bham.herokuapp.com/Donate">Donate</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid className='p-0 m-0 scrollbar-hidden'>
          <div className={this.state.active ? 'push' : 'pull'}>
            <div className="banner limit-width">
              <Row className="m-0">
                <Col>
                  <h1 className="banner-title text-light">RED MOUNTAIN MAKERS</h1>
                </Col>
              </Row>
              <Row className="m-0">
                <Col >
                  <h2 className="banner-text text-light">Try Something New<br />Build Something Great</h2>
                </Col>
              </Row>
              <Row className="m-0">
                <Col style={{ justifyContent: 'center', display: 'flex' }}>
                  <ButtonToolbar>
                    <Button
                      className="banner-btn"
                      variant='outline-light'
                      href='http://rmm-i-am-bham.herokuapp.com/Membership'>
                      Become a Maker
                    </Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </div>
          </div>
          <Row className="m-0">
            <div className="bg-light m-0" style={{ width: "100%" }}>
              <h1 className="text-dark text-center mt-5 mb-3" style={{ textDecoration: "underline #CD3A42 solid" }}>About Us</h1>
              <Col xs={12} sm={12} md={8} lg={6} xl={6} className="mx-auto">
                <p className="text-center mb-5">Our Mission is to provide a collaborative environment that promotes discovery, creativity, and exploration of STEAM (Science, Technology, Engineering, Art, Mathematics).
                We focus on Education, Entrepreneurship, Recreational Exploration and Open Source. We are a nonprofit makerspace in Birmingham Alabama dedicated to bringing a community
                together to learn, play, and grow in STEAM areas.</p>
              </Col>
            </div>
          </Row>
          <Row className="m-0">
            <div className="bg-dark m-0" style={{ width: "100%" }}>
              <h1 className="text-light text-center m-5" style={{ textDecoration: "underline #CD3A42 solid" }}>Our Focus</h1>
            </div>
          </Row>
          <div className="bg-dark m-0" style={{ width: "100%" }}>
            <Row className="mx-0 mb-0">
              {/* ART */}
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Row>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} className="m-0 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon style={{ fontSize: "3em" }} className="text-light" icon="cubes" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <h4 className="text-light text-center mb-0">Art</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mx-0">
                    <p className="text-light text-center">We offer multiple labs and tools for your artistic needs! We offer Sewing space with industrial sewing machines,
                woodshop, metal working tools, and more! Come stop by!</p>
                  </Col>
                </Row>
              </Col>
              {/* TECH AND ENGINEERING */}
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Row>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} className="m-0 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon style={{ fontSize: "3em" }} className="text-light" icon="laptop-code" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <h4 className="text-light text-center mb-0">Tech and Engineering</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <p className="text-light text-center">We offer multiple labs and tools for your tech and engineering needs! From circuit labs to 3D printing labs,
                members have access to a host of tools and space at our Makerspace!</p>
                  </Col>
                </Row>
              </Col>
              {/* SCIENCE */}
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Row>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} className="m-0 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon style={{ fontSize: "3em" }} className="text-light" icon="flask" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <h4 className="text-light text-center mb-0">Science</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <p className="text-light text-center">We offer multiple labs and tools for your scientific needs! Want to explore plant life, maybe try your hand at brewing.
                You can at Red Mountain Makers! We offer a biochem science lab for your scientifically inclined curiosity.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row className="m-0">
            <div className="bg-light m-0" style={{ width: "100%" }}>
              <h1 className="text-dark text-center m-5" style={{ textDecoration: "underline #CD3A42 solid" }}>What Else We Provide?</h1>
            </div>
          </Row>
          <div className="bg-light m-0" style={{ width: "100%" }}>
            {/* ROOM RENTALS */}
            <Row className="mx-0 mb-0">
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Row>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} className="m-0 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon style={{ fontSize: "3em" }} className="text-dark" icon="box-open" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <h4 className="text-dark text-center mb-0">Room Rentals</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <p className="text-dark text-center">Rent your own personal room that you can decorate and store your projects at Red Mountain Makers.</p>
                  </Col>
                </Row>
              </Col>
              {/* KNOWLEDGE BASE */}
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Row>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} className="m-0 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon style={{ fontSize: "3em" }} className="text-dark" icon="book" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <h4 className="text-dark text-center mb-0">Knowledge Base</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <p className="text-dark text-center">Knowledge is a powerful thing and we provide a community that can help fill in the gaps in your knowledge.
                    We don’t know everything but we have a diverse community of Makers who would love to help. Exploration into the unknown is the start of an adventure here at
                Red Mountain Makers.</p>
                  </Col>
                </Row>
              </Col>
              {/* HACK FRIENDLY SPACE */}
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Row>
                  <Col xs={12} sm={12} md={4} lg={4} xl={4} className="m-0 mx-auto" style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon style={{ fontSize: "3em" }} className="text-dark" icon="tools" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <h4 className="text-dark text-center mb-0">Hack Friendly Space</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 mx-auto">
                    <p className="text-dark text-center">Seriously, we have a hack zone full of parts ready to be dismembered and re-purposed! We take in all kinds of technological based
                donations! Plus we love open source ideas and work! At Red Mountain Makers, we try to stay as collaborative and friendly as possible.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    )
  }
}