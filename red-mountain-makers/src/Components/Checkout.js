import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
//import Image from '../assets/RMMLogo.png'
export default class Checkout extends React.Component {
  onToken = "..."

  render() {
    return (
      <StripeCheckout
        amount="500"
        billingAddress
        description="Donation"
        data-image="../src/assets/RMMLogo"
        locale="auto"
        name="Red Mountain Makers"
        stripeKey="pk_test_aEnBl38XEUIxKbay6USa7dvK"
        token={this.onToken}
        zipCode
      />
    )
  }
}

// export default injectStripe(Checkout);