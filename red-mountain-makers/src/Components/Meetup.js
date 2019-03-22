import React, { Component } from 'react';
import '../css/App.css';
import { Col, Container, Row, Card } from 'react-materialize'
import '../css/Classes.css'

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    let that = this;
    fetch('https://cryptic-crag.herokuapp.com/api/meetup', {
      method: 'get'
    })
      .then((response) => {
        return response.json();
      })
      .then((events) => {
        that.setState({ events: events.results })
        console.log(events)
      });
  }
  render() {
    var MeetsLive = true;
    //if (this.state.events[0].description != null) { MeetsLive = true; }
    if (MeetsLive == true) {
      return (

        <div>
          {console.log(this.state.events)}
          <h3 className="center-align">Meetups at the Space</h3>
          <Container >
            <div className="section" >
              <Row>

                {/* <div className="icon-block"></div> */}
                <div className="page-wrap">
                  {this.state.events.map(v => {
                    if(v.name == "Open Maker Hours" || v.name ==  'Open Maker Hours1'){
                      return null;
                    }else{
                    console.log(v.event_url);
                      return (<Col s={12} m={6}>
                        <Card className='grey darken-1' textClassName='white-text' title={v.name} actions={[<a href={v.event_url}>View the Meetup</a>]}>
                          {v.description.slice(3, v.description.length-4)}
                        </Card>
                      </Col>)
                    }
                  })}
                </div>

              </Row>
            </div>
          </Container>
        </div>
      );
    } else {
      return <p>nothing loaded yet</p>
    }
  }
}
export default Meetup;

