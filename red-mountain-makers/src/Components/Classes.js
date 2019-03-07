import React, { Component } from 'react';
import '../css/App.css';
import '../css/materialize.css'
import '../css/Classes.css'
//import Meetup from './Meetup'

class App extends Component {

  constructor(props){
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
          <div className="banner">
            <h3 className="valign-wrapper" style={{ height: '5em' }}><div className="center-align" style={{ width: '100%' }}>Classes at the Space</div></h3>
            <div className="container" >
              <div className="section" >
                <div className="row">
                  {this.state.events.length < 4 &&
                    <div className="col s12 m4">
                      {/* <div className="icon-block"></div> */}
                      <div className="page-wrap">
                        {this.state.events.map(v => {
                          if (v.status = true) {
                            return (<div>
                              <h5>{v.name.text}</h5>
                              <p>{v.description.text}</p>
                            </div>)
                          }
                        })}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="center-align">Future events</h3>
            <div className="container" >
              <div className="section" >
                <div className="row">
                  <div className="col m12 m6">
                    {/* <div className="icon-block"></div> */}
                    <div className="page-wrap">
                      Support for Meetup.com coming soon.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Meetup />  */}

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