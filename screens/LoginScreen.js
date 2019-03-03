import React from 'react';
import { Alert, ScrollView, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native';


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <WebView
      source={{uri: 'https://passiton-efaa5.firebaseapp.com/'}}
      // 'https://passiton-efaa5.firebaseapp.com/'
      style={{marginTop: 20}}
    />
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




