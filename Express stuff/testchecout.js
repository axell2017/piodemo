import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });


  // ...


    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_g1XsMdkWtRutvDl6ObB21Rf0"/>
    )
  }
}