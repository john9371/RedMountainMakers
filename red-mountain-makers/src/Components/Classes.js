import React, { Component } from 'react';
// import '../css/App.css';
// import '../css/materialize.css'
import { Card, Col, Row, Tabs, Tab } from 'react-materialize'
//import '../css/Classes.css'
import Meetup from './Meetup'

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
      });
  }
  render() {
    var EventsLive = false;
    this.state.events.map(v => {
      if (v.status == 'live') { EventsLive = true; }
    })
    if (EventsLive == true) {
      return (
        <div>
          <div className="banner" style={{ height: '60em' }}>

            <h3 className="valign-wrapper" style={{ height: '5em' }}><div className="center-align" style={{ width: '100%' }}>Classes at the Space</div></h3>
            <div className="container" >
              <div className="section" >
                {this.state.events.length == 1 &&
                  <Card className='grey darken-1' textClassName='white-text' title={this.state.events[0].name.text} actions={[<a href={this.state.events[0].url}>View the event</a>]}>
                    {this.state.events[0].description.text}
                  </Card>
                }
                {this.state.events.length == 2 &&
                  <Row>
                    {this.state.events.map((v) => {
                      return (
                        <Col s={12} m={6}>
                          <Card className='grey darken-1' textClassName='white-text' title={v.name.text} actions={[<a href={v.url}>View the event</a>]}>
                            {v.description.text}
                          </Card>
                        </Col>
                      )
                    })}
                  </Row>
                }
                {this.state.events.length > 2 &&
                  <div >
                    <Tabs className='tab-demo z-depth-1'>

                      {this.state.events.map((v, index) => {
                        console.log(v)
                        if (v.status = true && index == 0) {
                          return (
                            // <Carousel style={{height: 400}}>
                            <Tab title={v.name.text} active>
                              <Card className='grey darken-1' textClassName='white-text' actions={[<a href={v.url}>View the event</a>]}>
                                {v.description.text}
                              </Card>
                            </Tab>


                            //</Carousel> * /}
                          )
                        } else if (v.status = true) {
                          return (
                            // <Carousel style={{height: 400}}>
                            <Tab title={v.name.text}>
                              <Card className='grey darken-1' textClassName='white-text' actions={[<a href={v.url}>View the event</a>]}>
                                {v.description.text}
                              </Card>
                            </Tab>
                          )
                        } else {
                          return (null)
                        }
                      })}</Tabs>
                  </div>
                }
                {/* </div> */}
              </div>
            </div>
          </div>
          <Meetup />

        </div >
      );
    } else {
      return (
        <div>nothing</div>
      )
    }
  }
}

export default App;
