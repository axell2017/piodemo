import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native';


export default class ContributeScreen extends React.Component {
  static navigationOptions = {
    title: 'Contribute',
  };

  render() {
    return (
      <WebView
      source={{uri: 'https://passiton-efaa5.appspot.com/'}}
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
