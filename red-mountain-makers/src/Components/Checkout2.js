import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './Payment';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_aEnBl38XEUIxKbay6USa7dvK">
          <Elements>
            <CheckoutForm />
          </Elements>
      </StripeProvider>
    );
  }
}

export default App;