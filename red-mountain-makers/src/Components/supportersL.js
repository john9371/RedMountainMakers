import React, { Component } from 'react';
import '../css/supporters.css';
import Checkout from './Checkout.js';
import { render } from 'react-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Navbar from './Navbar';
import Footer from './footer';



import Banner from '../assets/Banner.png'
export default class Supporters extends Component {

  render() {
    return (
      <>
        <Navbar />
        <div className="donate-banner">
          <h3 className="header col s12 light">Donate to our Makerspace</h3>
          <strong>  <StripeProvider apiKey="pk_test_aEnBl38XEUIxKbay6USa7dvK">
            <Elements>
              <Checkout />
            </Elements>
          </StripeProvider></strong>


        </div>
        <Footer />
      </>
    )
  }
}