import React, { Component } from 'react';
import '../css/App.css';
import '../css/materialize.css'
//import Stripe from 'https://js.stripe.com/v3/'
import { Elements, StripeProvider } from 'react-stripe-elements';
import Checkout from './Checkout.js';
import Pit from '../assets/Pit_Area-1.jpg'
import Donate from '../assets/Donate.jpg'
import Pour from '../assets/Pour.jpg'
import Workshop from '../assets/Workshop.jpg'
import Banner from '../assets/Banner.png'
export default class Supporters extends Component {
  render() {
    return (  



      <div className="Trump">

        <div className="banner"> 
          <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <div className="row center">
                <h3 className="header col s12 light">Donate to our Makerspace</h3>
              </div>
              <br /><br />
              <div className="row center">
              <strong>  <StripeProvider apiKey="pk_test_aEnBl38XEUIxKbay6USa7dvK">
                <div className="example">
                <img className="Banner" src={Banner} /> <br></br>
                  <Elements>
                    <Checkout />
                  </Elements>
                </div>
              </StripeProvider></strong>
              </div> 
              <div>
                <h5>You donation doesn't just keep our nonprofit organization running! It purchases new equipment, sponsors members who would not be able to afford membership, support our prgorams and more..
                </h5> 
                </div>
                <div className="Cont"> 
                  <img className="PitArea" src={Pit} />
                <iframe width="320" height="240" src="https://www.youtube.com/embed/mCpvIQZth0g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                <img className="DDonate" src={Donate} />
                <img className="DDonate" src={Pour} />
               
                  </div>
              <br/><br/>
            </div>
          </div>
        </div>

        <h1> Supporters</h1>
          <div className="Obama" >
            
            <div className="container" id="colour" >
              <br />
              <h4>Our Supporters</h4><br />
              <p>Groups like ours don't start in a vacuum. They come into being because people saw a need - and worked together to find a solution. In the case of the Red Mountain Makers, we came together to develop a workshop - and a community, here in Birmingham - where being curious about your environment, technology, art, science and engineering isn't considered unusual - it's encouraged. To date, it's taken a lot of work - and in order to see our vision through, it's going to take much more.</p>

              <p> Consider donating to Red Mountain Makers whether it be time, finances, or equipment. </p>
              <br /><h5>Our supporters have helped us with money, donations of equipment and advice over the past three years. Thank you, thank you, Thank you!</h5>
              <br /><br /><br /><br /><br /><br /><br />
              <h4>SUPPLIES AND EQUIPMENT DONATIONS – 2015</h4>
              <p className="topknot">From our membership and friends:</p>
            <ul className="roll-list">
                  <li className="topknot">Kurt Fattig</li>
                  <li className="topknot">Mark Gilber</li>
                  <li className="topknot">Mark D. Garfinkel and Shirley Hicks</li>
                  <li className="topknot">Sally Kuhn</li>
                  <li className="topknot">Shawn Pearson</li>
                  <li className="topknot">John Rhymes</li>
                  <li className="topknot">Iris Rinke-Hammer</li>
                  <li className="topknot">Daniel Near</li>
                  <li className="topknot">Jessica Peterson</li>
                  <li className="topknot">Juan Porras</li>
                  <li className="topknot">Ruth Truett</li>
                  <li className="topknot">Trae Watson</li>
                  <li className="topknot">Steven Wyss</li>
                </ul>
              <br /><br /><br /><br /><br /><br /><br />
              <h4>FINANCIAL DONATIONS – 2015</h4>
              <br /><br />
              <p className="topknot">From our membership and friends:</p>
            <ul>
                  <li className="topknot">An anonymous donor</li>
                  <li className="topknot">Mark Gilbert</li>
                </ul>
              <br /><br /><br /><br /><br /><br /><br />
              <h4>ADVISORS – 2015</h4>
                <ul>
                  <li className="topknot">John Rhymes</li>
                  <li className="topknot">Steven Wyss</li>
                </ul>
              <br /><br /><br /><br /><br /><br /><br />
              <h4>SUPPLIES AND EQUIPMENT DONATIONS – 2014</h4>
              <p className="topknot">From our membership and friends:</p>
            <ul>
                  <li className="topknot">Mykel Alvis</li>
                  <li className="topknot">Baird Castleberry</li>
                  <li className="topknot">Kurt Fattig</li>
                  <li className="topknot">Mark D. Garfinkel and Shirley Hicks</li>
                  <li className="topknot">Bill Hudson</li>
                  <li className="topknot">Chris Lais</li>
                  <li className="topknot">Lynette Pope</li>
                  <li className="topknot">John Rhymes</li>
                  <li className="topknot">Trae Watson</li>
                  <li className="topknot">Steven Wyss</li>
                  <li className="topknot">Rick and Cynthia Curl</li>
                  <li className="topknot">Rick Curl's parents, Bob & Nell Curl, who graciously gave us workshop furniture and equipment, and photography equipment.</li>
                </ul>
              <h4>COMMUNITY SUPPORTERS – 2014</h4>
                <ul>
                  <li className="topknot">The McWane Center</li>
                  <li className="topknot">Alabama13</li>
                  <li className="topknot">The Greater Birmingham Fiber Guild</li>
                  <li className="topknot">Community Properties LLC</li>
                </ul>
              <h4>FINANCIAL DONATIONS – 2014</h4>
                <ul>
                  <li className="topknot">Mykel Alvis</li>
                  <li className="topknot">Alex Rosen</li>
                  <li className="topknot">VMware</li>
                </ul>
              <h4>ADVISORS – 2014</h4>
                <ul>
                  <li className="topknot">Keith Davis, Davis Professional Services, accounting</li>
                </ul>
              <br /><br /><br /><br /> 
              <h1 className="mid">Thank You!</h1>
            </div>
          </div>
      </div>
    )
  }
}