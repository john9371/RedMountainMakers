import React, { Component } from 'react';
import '../css/App.css';
import '../css/Classes.css'
import { Row, Col, Container, Card } from 'react-bootstrap';



const Timestamp = require('react-timestamp');
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
    var numHours = 0;
    var MeetsLive = true;
    //if (this.state.events[0].description != null) { MeetsLive = true; }
    if (MeetsLive == true) {
      return (
        <>
          <z style={{background: 'white'}}>
            {console.log(this.state.events)}
            <h3 className="center-align">Meetups at the Space</h3>
            <Container >
                <Row>

                  {/* <div className="icon-block"></div> */}
                  <div className="page-wrap">
                    {this.state.events.map(v => {
                      if((v.name == "Open Maker Hours" || v.name ==  'Open Maker Hours1')){
                        numHours++
                        v.name = "Open Maker Hours"
                      }
                      var fun = '';
                      for(var i = 0; i < v.description.length; i++){
                        if(v.description.slice(i, i+5) == '<br/>'){
                          fun+='\n'
                          i+=4;
                        }else if (v.description.slice(i, i+3) == "<p>" || v.description.slice(i, i+3) == '<b>'){
                          i+=2;
                        } else if( v.description.slice(i, i+4) == '</p>' || v.description.slice(i, i+4) == '</b>' || v.description.slice(i, i+4) == '</a>'){
                          i+=3;
                        } else if( v.description.slice(i, i+2) == '<a'){
                          while(v.description[i] != '>'){
                            i++
                          }
                        }else{
                          fun += v.description[i];
                        }
                      }
                      if((v.name == "Open Maker Hours")&& numHours > 3){
                        return null;
                      }else{
                        var time = v.time
                        return (<Col s={12} m={6}>
                          <Card className='grey darken-1' textClassName='white-text' style={{opacity: .8}} title={v.name} actions={[<a href={v.event_url}>View the meeting</a>]}>
                            {fun}<br /><br />
                            <Timestamp time={v.time/1000} format='full' includeDay/>
                          </Card>
                        </Col>)
                      }
                    })}
                  </div>

                </Row>
            </Container>
          </z>
        </>
      );
    } else {
      return <p>nothing loaded yet</p>
    }
  }
}

export default Meetup;

