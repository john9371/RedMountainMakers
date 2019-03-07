import React, { Component } from 'react'

import Style from '../css/style.css'
import Image from '../assets/RMMLogo.png'
import Image2 from '../assets/robots.jpg'
import Image3 from '../assets/printers.jpg'
import Image4 from '../assets/molten.jpg'
import Wrench from '../assets/wrench.jpg'
import css from '../css/home.css'


export default class Home extends Component {
  render() {


    return (
      <>
        <div className="banner">
          <img className="logo" src={Image} />
          <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <div className="row center">
                <br /><br />
                <h6 className="header col s12 light">Our Mission is to provide a collaborative environment that promotes discovery, creativity, and exploration of STEAM (Science, Technology, Engineering, Art, Mathematics) We focus in Education, Entrepreneurship, Recreational Exploration and Open Source. We are a nonprofit makerspace in Birmingham Alabama dedicated to bringing a community together to learn, play, and grow in STEAM areas.</h6>
              </div>
              <br /><br />
              <div className="row center">
                <a href="" id="download-button" className="btn-large waves-effect waves-light #000000 black red-text text-darken-2 z-depth-3"><strong>Become a Maker</strong></a>
              </div>
              <br /><br />
            </div>
          </div>
        </div>

        
        <div className="section black darken-2" >
          <div className="row">
            <h3 className="focus center #d50000 red-text">OUR FOCUS</h3>
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center #d50000 red-text"><i className="material-icons">flash_on</i></h2>
                <h4 className="center white-text">Tech and Engineering</h4>
                <br/>
                <p className="light center white-text">We offer multiple labs and tools for your tech and engineering needs! From Circuits labs to 3D printing labs, members have access to entire host of tools and space at our Makerspace!</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center #d50000 red-text"><i className="material-icons">color_lens</i></h2>
                <h4 className="center white-text">Art</h4>
                <br/>
                <p className="light center white-text">We offer multiple labs and tools for your artistic needs! We offer Sewing space with industrial sewing machines, woodshop, metal working tools, and more! Come stop by!</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center #d50000 red-text"><i className="material-icons">settings</i></h2>
                <h4 className="center white-text">Science</h4>
                <br/>                
                <p className="light center white-text">We offer multiple labs and tools for your scientific needs! Want to explore plant life, maybe try your hand at brewing. You can at Red Mountain Makers! We offer a biochem science lab for your scientifically inclined curiosity.</p>
              </div>
            </div>
          </div>
        </div>


        <br /> <br />


        <div>
          <div>
            <br />
            <h4 className="other red-text">WHAT ELSE DO WE PROVIDE?</h4>
            <hr />

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
                <div className="col s12 m4">
                  <img className="img" src={Image3} />
                </div>
                <div className="col s12 m4">
                  <img className="img" src={Image4} />
                </div>
                <div className="col s12 m4">
                  <img className="img" src={Image2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}



