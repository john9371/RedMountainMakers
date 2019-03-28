import React, { Component } from 'react';
import { Image, Row, Col, Form, Button } from 'react-bootstrap';
import '../scss/main.css'
import Logo from "../assets/RMMLogo.png"


export default class Donate extends Component {

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
                                <Button waves="red" style={styles.button}>$10</Button>
                            </Col>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button waves="red" style={styles.button}>$25</Button>
                            </Col>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button waves="red" style={styles.button}>$50</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button waves="red" style={styles.button} >$100</Button>
                            </Col>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button waves="red" style={styles.button}>$250</Button>
                            </Col>
                            <Col s={4} m={4} l={4} className="less-padding zero-padding">
                                <Button waves="red" style={styles.button}>$500</Button>
                            </Col>
                        </Row>
                        <Row className="no-margin">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="number" min={0} placeholder="Other" />
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row>
                            <Col s={12} m={12} l={12}>
                                <Button waves="red" style={styles.button}>Donate</Button>
                            </Col>
                        </Row>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Image href="http://localhost:3000/" src={Logo} className="logo" />
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