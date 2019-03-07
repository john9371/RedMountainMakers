import React, { Component } from 'react';
import '../css/App.css';
import '../css/materialize.css'
//import Stripe from 'https://js.stripe.com/v3/'
import { Elements, StripeProvider } from 'react-stripe-elements';
import Checkout from './Checkout.js';

export default class Supporters extends Component {
  render() {
    return (


      <body class="Trump">
        <div class="page-wrap">
          <h1> Supporters</h1>
          <div class="Obama">
            <div>
            </div>
              <p>To Donate</p>
            <StripeProvider apiKey="pk_test_aEnBl38XEUIxKbay6USa7dvK">
              <div className="example">
                
                <Elements>
                  <Checkout />
                </Elements>
              </div>
            </StripeProvider>
            <br />
            <h4>Our Supporters</h4><br />
            <p>Groups like ours don't start in a vacuum. They come into being because people saw a need - and worked together to find a solution. In the case of the Red Mountain Makers, we came together to develop a workshop - and a community, here in Birmingham - where being curious about your environment, technology, art, science and engineering isn't considered unusual - it's encouraged. To date, it's taken a lot of work - and in order to see our vision through, it's going to take much more.</p>

            <p> Consider donating to Red Mountain Makers whether it be time, finances, or equipment. </p>
            <br /><h5>Our supporters have helped us with money, donations of equipment and advice over the past three years. Thank you, thank you, Thank you!</h5>
            <br /><br /><br /><br /><br /><br /><br />
            <h4>SUPPLIES AND EQUIPMENT DONATIONS – 2015</h4>
            <p class="topknot">From our membership and friends:
           <ul class="roll-list">
                <li class="indent">Kurt Fattig</li>
                <li class="indent">Mark Gilber</li>
                <li class="indent">Mark D. Garfinkel and Shirley Hicks</li>
                <li class="indent">Sally Kuhn</li>
                <li class="indent">Shawn Pearson</li>
                <li class="indent">John Rhymes</li>
                <li class="indent">Iris Rinke-Hammer</li>
                <li class="indent">Daniel Near</li>
                <li class="indent">Jessica Peterson</li>
                <li class="indent">Juan Porras</li>
                <li class="indent">Ruth Truett</li>
                <li class="indent">Trae Watson</li>
                <li class="indent">Steven Wyss</li>
              </ul>
            </p>
            <br /><br /><br /><br /><br /><br /><br />
            <h4>FINANCIAL DONATIONS – 2015</h4>
            <br /><br />
            <p class="topknot">From our membership and friends:
           <ul>
                <li class="indent">An anonymous donor</li>
                <li class="indent">Mark Gilbert</li>
              </ul>
            </p>
            <br /><br /><br /><br /><br /><br /><br />
            <h4>ADVISORS – 2015</h4>
            <p>
              <ul>
                <li class="indent">John Rhymes</li>
                <li class="indent">Steven Wyss</li>
              </ul>
            </p>
            <br /><br /><br /><br /><br /><br /><br />
            <h4>SUPPLIES AND EQUIPMENT DONATIONS – 2014</h4>
            <p class="topknot">From our membership and friends:
           <ul>
                <li class="indent">Mykel Alvis</li>
                <li class="indent">Baird Castleberry</li>
                <li class="indent">Kurt Fattig</li>
                <li class="indent">Mark D. Garfinkel and Shirley Hicks</li>
                <li class="indent">Bill Hudson</li>
                <li class="indent">Chris Lais</li>
                <li class="indent">Lynette Pope</li>
                <li class="indent">John Rhymes</li>
                <li class="indent">Trae Watson</li>
                <li class="indent">Steven Wyss</li>
                <li class="indent">Rick and Cynthia Curl</li>
                <li class="indent">Rick Curl's parents, Bob & Nell Curl, who graciously gave us workshop furniture and equipment, and photography equipment.</li>
              </ul>
            </p>
            <h4>COMMUNITY SUPPORTERS – 2014</h4>
            <p>
              <ul>
                <li class="indent">The McWane Center</li>
                <li class="indent">Alabama13</li>
                <li class="indent">The Greater Birmingham Fiber Guild</li>
                <li class="indent">Community Properties LLC</li>
              </ul>
            </p>
            <h4>FINANCIAL DONATIONS – 2014</h4>
            <p>
              <ul>
                <li class="indent">Mykel Alvis</li>
                <li class="indent">Alex Rosen</li>
                <li class="indent">VMware</li>
              </ul>
            </p>
            <h4>ADVISORS – 2014</h4>
            <p>
              <ul>
                <li class="indent">Keith Davis, Davis Professional Services, accounting</li>
              </ul>
            </p>
            <br /><br /><br /><br />
          </div>
        </div>

      </body>
    )
  }
}