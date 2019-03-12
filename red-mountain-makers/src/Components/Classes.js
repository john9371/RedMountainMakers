import React, { Component } from 'react';
import '../css/App.css';
//import '../css/materialize.css'
import { Card, Col, Carousel } from 'react-materialize'
import '../css/Classes.css'
//import Meetup from './Meetup'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    fetch("https://www.eventbriteapi.com/v3/users/me/events/?token=GS3SVXQ6SKYYRQXFQL36")
      .then((response) => {
        return response.json();
      })
      .then((events) => {
        this.setState(events)
        console.log(events)
      });
  }
  render() {
    var EventsLive = false;
    this.state.events.map(v => {
      console.log(v)
      if (v.status == 'live') { EventsLive = true; }
    })
    if (EventsLive == true) {
      return (
        <div>
          <div className="banner" style={{ height: '60em' }}>

            <h3 className="valign-wrapper" style={{ height: '5em' }}><div className="center-align" style={{ width: '100%' }}>Classes at the Space</div></h3>
            <div className="container" >
              <div className="section" >
                <div className="row">
                  {this.state.events.length < 4 &&
                    <div >
                      {this.state.events.map(v => {
                        if (v.status = true) {
                          return (
                            <div className="row" >
                              <Col m={4} s={12}>
                                <Card className='grey darken-1' textClassName='white-text' title={v.name.text} actions={[<a href={v.url}>View the event</a>]}>
                                  {v.description.text}
                                </Card>
                              </Col>
                              <Col m={4} s={12}>
                                <Card className='grey darken-1' textClassName='white-text' title={v.name.text} actions={[<a href={v.url}>View the event</a>]}>
                                  {v.description.text}
                                </Card>
                              </Col>
                              <Col m={4} s={12}>
                                <Card className='grey darken-1' textClassName='white-text' title={v.name.text} actions={[<a href={v.url}>View the event</a>]}>
                                  {v.description.text}
                                </Card>
                              </Col>
                            </div>
                          )
                        }
                      })}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="white banner" style={{ height: '60rem' }}>
            <div className="valign-wrapper" style={{ height: '20rem' }}><h3 className="center-align" style={{ height: '5rem', width: '100%' }}>Meet With Us in Events We Host</h3></div>
            <div className="container" >
              <div className="section" >
                <div className="row">
                  <Col m={10} s={12}>
                    <Card className='grey' textClassName='white-text' title='Future' actions={[<a href=''>View the event</a>]}>
                      Support coming soon
                    </Card>
                  </Col>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    } else {
      return (
        <div>nothing</div>
      )
    }
  }
}

export default App;
