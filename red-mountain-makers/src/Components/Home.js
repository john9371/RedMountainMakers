import React, { Component } from 'react'
import '../scss/main.scss';
import { Row, Col, Button, Container } from 'react-bootstrap';


export default class Home extends Component {
  render() {
    return (
        <Container fluid className="p-0">
          <div className="banner">
            <Row>
              <Col l={12} m={12} s={12}>
                <h1 className="main-text">RED MOUNTAIN MAKERS</h1>
              </Col>
            </Row>
            <Row>
              <Col l={12} m={12} s={12}>
                <h3 className="top-banner-text">Your Local Birmingham Makerspace</h3>
              </Col>
            </Row>
            <Row>
              <Col l={12}>
                <h6 className="btm-banner-text text-white">Our Mission is to provide a collaborative environment that promotes discovery, creativity, and exploration of STEAM (Science, Technology, Engineering, Art, Mathematics) We focus in Education, Entrepreneurship, Recreational Exploration and Open Source. We are a nonprofit makerspace in Birmingham Alabama dedicated to bringing a community together to learn, play, and grow in STEAM areas.</h6>
              </Col>
            </Row>
            <Row>
              <Col l={12} m={12} s={12} style={{ justifyContent: 'center', display: 'flex' }}>
                <Button
                  className="btn-primary"
                  style={{ width: 175 }}
                  waves='light'
                  node='a'
                  href='http://localhost:3000/Membership'>
                  Become a Maker
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
        )
      }
}