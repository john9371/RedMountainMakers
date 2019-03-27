import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './Payment';

class App extends Component {
  render() {
      let amount = this.props.amount;
    return (
      <StripeProvider apiKey="pk_test_aEnBl38XEUIxKbay6USa7dvK">
          <Elements>
            <CheckoutForm {... amount}/>
          </Elements>
      </StripeProvider>
    );
  }
}

export default App;