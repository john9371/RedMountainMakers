import React, { Component } from 'react'

import Style from '../css/style.css'
import Image from '../assets/RMMLogo.png'
import Image2 from '../assets/robots.jpg'
import Image3 from '../assets/printers.jpg'
import Image4 from '../assets/molten.jpg'
import Wrench from '../assets/wrench.jpg'
import Glass from '../assets/glass.jpg'
import Molten from '../assets/molten.jpg'
import Wood from '../assets/wood.jpg'
import Plants from '../assets/plants.jpg'
import Chip from '../assets/chip.jpg'
import Bham from '../assets/bham.jpg'


import css from '../css/home.css'


export default class Home extends Component {
  render() {


    return (
      <>
        <div className="banner">
          <div className="section no-pad-bot" id="index-banner">
            <h1 className="center main">RED MOUNTAIN MAKERS</h1>
            <div className="container">
              <div className="row center-align">
                <br /><br /><br /><br /><br /><br />
                <h3 className="title">Your Local Birmingham Makerspace</h3>
                <h6 className="header col center-align s12 light" style={{width: '80vw'}}>Our Mission is to provide a collaborative environment that promotes discovery, creativity, and exploration of STEAM (Science, Technology, Engineering, Art, Mathematics) We focus in Education, Entrepreneurship, Recreational Exploration and Open Source. We are a nonprofit makerspace in Birmingham Alabama dedicated to bringing a community together to learn, play, and grow in STEAM areas.</h6>
              </div>
              <br /><br />
              <div className="row center">
                <a href="http://rmm-i-am-bham.herokuapp.com/Membership" id="download-button" className="btn-large waves-effect waves-black #000000 blue black-text text-darken-2 z-depth-3"><strong>Become a Maker</strong></a>
              </div>
              <br /><br />
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />

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
              <img className="img responsive-img glass" src={Wood} />
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
                <div className="col s1 m4" id="nopadding">
                  <img className="img responsive-img" src={Image3} />
                </div>
                <div className="col s1 m4" id="nopadding">
                  <img className="img responsive-img" src={Chip} />
                </div>
                <div className="col s1 m4" id="nopadding">
                  <img className="img responsive-img" src={Molten} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
    <div className="row center">
      <h5>Contact Info</h5>
    </div>

        <div className="container">
          <form action="/action_page.php">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name.." />

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label for="state">E-mail</label>
            <input type="text" id="lname" name="E-mail" placeholder="Your e-mail.." />

            <label for="subject">Text</label>
            <textarea id="subject" name="subject" placeholder="Questions, concerns, comments, etc.." style={{ height: "200px" }}></textarea>
          </form>
        </div>
        <div className="row center">
          <form ref="form" onSubmit={this.handleSubmit}>
            <button type="submit" style={{}}>Submit</button>
          </form>
        </div>
        <br /><br /><br />
      </>
    )
  }
}