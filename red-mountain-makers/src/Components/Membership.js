import React, { Component } from 'react'
import Glow from '../assets/glow red.jpg'
import Building from '../assets/building red.jpg'
import Room from '../assets/classroom.jpg'
import { Card, Col, Row } from 'react-materialize'



export default class Membership extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <p class="flow-text">
                        <div class="center-align"><p><h1>How to become a Maker</h1><br />
                            Come Tour the space! We have open ours Tuesday, Thursday, and Sunday 6:30pm - 9:00pm<br />
                            
                            Become a Basic Member, its super easy! Purchase your membership here! Since an important
                            part of the maker space philosophy is trust, we want to get a sense of who you are.You will
                            also want to evaluate our community to see if it's a good fit for you as well. This is why all
                            members start out as basic members.Once you've been out for a few meetings, you can apply to
                            become a Full Maker Membership.<br />
                            <h2>Full Members must also fulfill the following responsibilities:</h2>
                            A member must thoughtfully contribute to Red Mountain Makers’s direction and
                            policies.A member must pay the monthly fee as determined by the board of
                            directors.At the time a member's eligibility expires, he must forfeit his or her
                            method of entry in addition to any other property owned by Red Mountain Makers
                            to a member of the board of directors or an agent designated by the board of
                            directors for this purpose.
                        </p></div></p>
                    <div className="line">
                        <img className="photo" src={Glow}
                            width={400}
                            height={300}
                            alignleft />
                        <div class="col s12 m4 l1"><p></p></div>
                    </div>
                    <div className="str">
                        <img className="pic" src={Building}
                            width={400}
                            height={300} />
                        <div class="col s12 m4 l3"><p></p></div>
                    </div>
                    <div className="narrow">
                        <img className="image" src={Room}
                            width={400}
                            height={300} />
                        <div class="col s12 m4 l5"><p></p></div>
                    </div>
                    <Row>
                    <span class="red-text text-darken-2">
                        <Col s={12} m={2}>
                            <Card title="BASIC MAKER"><p>
                                $40/month<br />
                                Access to space during open hours<br />
                                Early Discounts on classes and workshops<br />
                                Eligible for Full Memberships<br />
                                Join Maker community<br /></p>
                
                            </Card>
                        </Col>
                    </span>
                        <span class="red-text text-darken-2">
                            <Col s={12} m={3}>
                                <Card title="FULL MAKER"><p>
                                    $80/month<br />
                                    24/7 key access to makerspace<br />
                                    Access to space during open hours<br />
                                    Early Discounts on classes and workshops<br />
                                    Join Maker community<br />
                                    Eligibility to submit issues before the board of directors<br />
                                    Eligibility to vote for officers and directors<br />
                                    Eligibility to vote on issues put before the membership</p>

                                </Card>
                            </Col>
                        </span>

                        <span class="red-text text-darken-2">
                            <Col s={12} m={2}>
                                <Card title="MAKER PRO">
                                    $120/month<br />
                                    Under Construction<br />
                                </Card>
                            </Col>
                        </span>
                        <span class="red-text text-darken-2">
                            <Col s={12} m={2}>
                                <Card title="MAKER-PANUER">
                                    $210/month<br />
                                    Under Construction<br />
                                </Card>
                            </Col>
                        </span>

                    </Row>
                </div>
            </div>
                )
        
            }
        }
        
