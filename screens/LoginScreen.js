import React from 'react';
import { Alert, ScrollView, StyleSheet, Button, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { WebView } from 'react-native';
import StripeCheckout from 'expo-stripe-checkout';


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  onPaymentSuccess = (token) => {
    //this.setState({ token })
  }
   
  onClose = () => {
    // maybe navigate to other screen here?
  }
  render() {
    return (
      <Text>Hello</Text>
    //   <StripeCheckout
    //   publicKey="pk_test_g1XsMdkWtRutvDl6ObB21Rf0"
    //   amount={100000}
    //   imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
    //   storeName="Stripe Checkout"
    //   description="Test"
    //   currency="USD"
    //   allowRememberMe={false}
    //   prepopulatedEmail="test@test.com"
    //   onClose={this.onClose}
    //   onPaymentSuccess={this.onPaymentSuccess}
    // />
      );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});




