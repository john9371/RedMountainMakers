import React, { Component } from 'react';
import { Image, Row, Col, Form, Button } from 'react-bootstrap';
import '../scss/main.css'
import Logo from "../assets/RMMLogo.png"


export default class Donate extends Component {
    constructor(props) {
        super(props);
        this.toggleClass10 = this.toggleClass10.bind(this);
        this.toggleClass25 = this.toggleClass25.bind(this);
        this.toggleClass50 = this.toggleClass50.bind(this);
        this.toggleClass100 = this.toggleClass100.bind(this);
        this.toggleClass250 = this.toggleClass250.bind(this);
        this.toggleClass500 = this.toggleClass500.bind(this);
        this.state = {
          btn10: false,
          btn25: false,
          btn50: false,
          btn100: false,
          btn250: false,
          btn500: false,
        };
      }
      toggleClass10() {
        this.setState({ btn10: !this.state.btn10 });
      };
      toggleClass25() {
        this.setState({ btn25: !this.state.btn25 });
      };
      toggleClass50() {
        this.setState({ btn50: !this.state.btn50 });
      };
      toggleClass100() {
        this.setState({ btn100: !this.state.btn100 });
      };
      toggleClass250() {
        this.setState({ btn250: !this.state.btn250 });
      };
      toggleClass500() {
        this.setState({ btn500: !this.state.btn500 });
      };

    render() {
        return (
            <>
                <div className="donate-container">
                    <div className="box pr-4 pl-4">
                        <Row className="no-margin">
                            <Col s={12} m={12} l={12}>
                                <p className="box-header center">Donate</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} l={12}>
                                <p className="mission center">Your donation doesn't just keep our nonprofit organization running, it purchases new equipment,
                                sponsors members who would otherwise not be able to afford membership, supports our programs, and more.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} l={12}>
                                <p className="call-to-action">Help Support Your Local Makerspace</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button onClick={this.toggleClass10} id={this.state.btn10 ? 'selected' : 'inactive'}>$10</Button>
                            </Col>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button onClick={this.toggleClass25} id={this.state.btn25 ? 'selected' : 'inactive'}>$25</Button>
                            </Col>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button onClick={this.toggleClass50} id={this.state.btn50 ? 'selected' : 'inactive'}>$50</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button onClick={this.toggleClass100} id={this.state.btn100 ? 'selected' : 'inactive'}>$100</Button>
                            </Col>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button onClick={this.toggleClass250} id={this.state.btn250 ? 'selected' : 'inactive'}>$250</Button>
                            </Col>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button onClick={this.toggleClass500} id={this.state.btn500 ? 'selected' : 'inactive'}>$500</Button>
                            </Col>
                        </Row>
                        <Row className="no-margin">
                            <div className="mx-auto">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="number" min={0} placeholder="Other" />
                                    </Form.Group>
                                </Form>
                            </div>
                        </Row>
                        <Row>
                            <Col s={12} m={12} l={12}>
                                <Button style={styles.button}>Donate</Button>
                            </Col>
                        </Row>
                        <div>
                            <a href="http://localhost:3000/" style={{ display: "flex", justifyContent: "center" }}>
                                <Image src={Logo} className="logo" />
                            </a>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

let styles = {
    button: {
        width: "100%",
        backgroundColor: "#D3D3D3",
        color: "black",
    },
}