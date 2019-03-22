import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Image from '../assets/RMMLogo.png'
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dollars: "0",
      cents: "00"
    }
  }

  handleChange(value, e) {
    if (e.target.value <= 9) {
      this.setState({ [value]: "0" + e.target.value })
    }
    else {
      this.setState({ [value]: e.target.value })
    }
  }

  onToken = "..."

  render() {
    return (
      <>
        <div style={{ marginTop: '12vh', position: 'absolute', right: '20px' }}>
          <input style={{ height: '25px', width: '50px', backgroundColor: 'white' }} min="0" type="number" placeholder="0" name="dollarsToDonate" onChange={this.handleChange.bind(this, 'dollars')} min="0" step="1" ></input>.
          <input style={{ height: '25px', width: '50px', backgroundColor: 'white', marginRight: '5px' }} min="0" placeholder="00" type="number" name="centsToDonate" onChange={this.handleChange.bind(this, 'cents')}></input>
          <StripeCheckout
            amount={this.state.dollars + this.state.cents}
            billingAddress
            description="Donation"
            data-image="../assets/RMMLogo.png"
            locale="auto"
            name="Red Mountain Makers"
            stripeKey="pk_test_aEnBl38XEUIxKbay6USa7dvK"
            token={this.onToken}
            zipCode
          />
        </div>
      </>
    )
  }
}

// export default injectStripe(Checkout);