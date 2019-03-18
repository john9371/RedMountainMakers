import React, { Component } from 'react';
import '../css/App.css';
import '../css/materialize.css'
import '../css/Classes.css'

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    fetch('https://cryptic-crag.herokuapp.com/api/meetup',{
        mode: 'no-cors',
        method: 'get'
    })
      .then((response) => {
          console.log(response)
        return response.json();
      })
      .then((events) => {
        this.setState(events)
        console.log(events)
      });
  }
  render() {
      return (
        <div>
          <h3 className="center-align">Classes at the Space</h3>
          <div className="container" >
            <div className="section" >
              <div className="row">
                <div className="col m12 m6">
                  {/* <div className="icon-block"></div> */}
                  <div className="page-wrap">
                    {this.state.events.map(v => {
                      if (v.status = true) {
                        return (<div id="ClassPage">
                          <h5>{v.name}</h5>
                          <p>{v.description}</p>
                        </div>)
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Meetup;

