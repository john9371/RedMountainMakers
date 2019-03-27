import React, { Component } from 'react'
import Image2 from '../assets/robots.jpg';
import Image3 from '../assets/printers.jpg';
import Molten from '../assets/molten.jpg';
import Wood from '../assets/wood.jpg';
import Plants from '../assets/plants.jpg';
import Chip from '../assets/chip.jpg';
import { Button, Card, Row, Col } from 'react-materialize';
import Navbar from './Navbar';
import '../css/home.css';
import Footer from './footer';


export default class Home extends Component {
  render() {


    return (
      <>
        <Navbar />
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
        <div>
          <div class="row valign-wrapper" id="nomargin">
            <div className="col s12 m6 l6">
              <h4 className="center black-text">Tech and Engineering</h4>
              <p className="light center black-text" id="focusText">We offer multiple labs and tools for your tech and engineering needs! From Circuits labs to 3D printing labs, members have access to entire host of tools and space at our Makerspace!</p>
            </div>

            <div className="col s12 m6 l6" id="nopadding">
              <img className="img responsive-img" src={Image2} />
            </div>
          </div>

          <div className="row valign-wrapper" id="nomargin">
            <div className="col s12 m6 l6" id="nopadding">
              <img className="img responsive-img" src={Wood} />
            </div>

            <div className="col s12 m6 l6">
              <h4 className="center black-text">Art</h4>
              <p className="light center black-text" id="focusText">We offer multiple labs and tools for your artistic needs! We offer Sewing space with industrial sewing machines, woodshop, metal working tools, and more!<br /> Come stop by!</p>
            </div>
          </div>

          <div className="row valign-wrapper" id="nomargin">
            <div className="col s12 m6 l6">
              <h4 className="center black-text">Science</h4>
              <p className="light center black-text" id="focusText">We offer multiple labs and tools for your scientific needs! Want to explore plant life, maybe try your hand at brewing. You can at Red Mountain Makers! We offer a biochem science lab for your scientifically inclined curiosity.</p>
            </div>

            <div className="col s12 m6 l6" id="nopadding">
              <img className="img responsive-img" src={Plants} />
            </div>
          </div>
        </div>


        <br /> <br />



        <div>
          <div className="else">
            <br />
            <h4 className="other red-text">WHAT ELSE DO WE PROVIDE?</h4>

            <div className="row valign-wrapper">
              <div className="col s12 m4">
                <div className="icon-block">
                  <br /><br />
                  <h2 className="center #d50000 red-text"><i className="material-icons">business</i></h2>
                  <h5 className="center black-text">Room Rentals</h5>
                  <p className="light center black-text">Rent your own personal room. You can decorate and store your projects in your rented rooms here at Red Mountain Makers. Rest assured, your stuff is safe with us!</p>
                  <br /><br /><br />
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center #d50000 red-text"><i className="material-icons">content_cut</i></h2>
                  <h5 className="center black-text">Hack Friendly</h5>
                  <p className="light center black-text">We have a hack zone full of parts ready to be dismembered and re-purposed! We take in all kinds of technological based donations! Plus We love open source ideas and work!</p>
                  <br />
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center #d50000 red-text"><i className="material-icons">face</i></h2>
                  <h5 className="center black-text">Knowledge Base</h5>
                  <p className="light center black-text">Knowledge is a powerful thing and we provide a community that can help fill in the gaps in your knowledge. We don’t know everything but we have a diverse community of Makers who would love to help.</p>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="pics">
                <div className="col s4 m4" id="nopadding">
                  <img className="img responsive-img" src={Image3} />
                </div>
                <div className="col s4 m4" id="nopadding">
                  <img className="img responsive-img" src={Chip} />
                </div>
                <div className="col s4 m4" id="nopadding">
                  <img className="img responsive-img" src={Molten} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br /> <br />

        <div className="container">
          <form action="/action_page.php">
            <label for="fname">Contact Info</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name.." />

            <label for="lname">First Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label for="state">Last Name</label>
            <input type="text" id="lname" name="E-mail" placeholder="Your e-mail.." />

            <label for="subject">E-mail</label>
            <textarea id="subject" name="subject" placeholder="Questions, concerns, etc.." style={{ height: "200px" }}></textarea>
          </form>
        </div>
        <div className="row center">
          <form ref="form" onSubmit={this.handleSubmit}>
            <button type="submit" style={{}}>Submit</button>
          </form>
        </div>
        <br /> <br /> <br />
        <Footer />
      </>
    )
  }
}




