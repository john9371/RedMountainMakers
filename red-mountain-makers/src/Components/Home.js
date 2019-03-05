import React, { Component } from 'react'
import Image from './RedMountainMakersLogo.png'
 import Style from '../css/style.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <img className="logo" src={Image} style={{}}/>
          <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <div className="row center">
                <h6 className="header col s12 light">Our Mission is to provide a collaborative environment that promotes discovery, creativity, and exploration of STEAM (Science, Technology, Engineering, Art, Mathematics) We focus in Education, Entrepreneurship, Recreational Exploration and Open Source. We are a nonprofit makerspace in Birmingham Alabama dedicated to bringing a community together to learn, play, and grow in STEAM areas.</h6>
              </div>
              <div className="row center">
                <a href="" id="download-button" className="btn-large waves-effect waves-light #000000 black red-text text-darken-2 z-depth-3"><strong>Become a Maker</strong></a>
              </div>
              <br /><br />
            </div>
          </div>
        </div>


        <div className="container" >
          <div className="section" >


            <hr />
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center #d50000 red-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Tech and Engineering</h5>

                  <p className="light center">We offer multiple labs and tools for your tech and engineering needs! From Circuits labs to 3D printing labs, members have access to entire host of tools and space at our Makerspace!</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center #d50000 red-text"><i className="material-icons">color_lens</i></h2>
                  <h5 className="center">Art</h5>

                  <p className="light center">We offer multiple labs and tools for your artistic needs! We offer Sewing space with industrial sewing machines, woodshop, metal working tools, and more! Come stop by!</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center #d50000 red-text"><i className="material-icons">settings</i></h2>
                  <h5 className="center">Science</h5>

                  <p className="light center">We offer multiple labs and tools for your scientific needs! Want to explore plant life, maybe try your hand at brewing. You can at Red Mountain Makers! We offer a biochem science lab for your scientifically inclined curiosity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr /> <br /> <br />
        <div>
          <div className="black darken-2">
            <br />
            <h4 className="other red-text">WHAT ELSE DO WE PROVIDE?</h4>
            <hr />

            <div className="row valign-wrapper">
              <div className="col s12 m4">
                <div className="icon-block">
                  <br /><br />
                  <h2 className="center #d50000 red-text"><i className="material-icons">business</i></h2>
                  <h5 className="center white-text">Room Rentals</h5>
                  <p className="light center white-text">Rent your own personal room. You can decorate and store your projects in your rented rooms here at Red Mountain Makers. Rest assured, your stuff is safe with us!</p>
                  <br /><br />
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center #d50000 red-text"><i className="material-icons">content_cut</i></h2>
                  <h5 className="center white-text">Hack Friendly</h5>
                  <p className="light center white-text">We have a hack zone full of parts ready to be dismembered and re-purposed! We take in all kinds of technological based donations! Plus We love open source ideas and work!</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center #d50000 red-text"><i className="material-icons">face</i></h2>
                  <h5 className="center white-text">Knowledge Base</h5>
                  <p className="light center white-text">Knowledge is a powerful thing and we provide a community that can help fill in the gaps in your knowledge. We don’t know everything but we have a diverse community of Makers who would love to help.</p>
                </div>
              </div>
            </div>
          </div>

          <br /><br />
        </div>
      </div>
        )
      }
    }
    
    
export default Home;