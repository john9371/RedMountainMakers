import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Image from '../assets/RMMLogo.png'
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dollars: "1",
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
          $<input style={{ width: '50px' }} type="number" name="dollarsToDonate" onChange={this.handleChange.bind(this, 'dollars')} min="0" step="1" ></input>.
      <input style={{ width: '50px' }} type="number" name="centsToDonate" onChange={this.handleChange.bind(this, 'cents')}></input>
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
        </>
      )
    }
  }

// export default injectStripe(Checkout);