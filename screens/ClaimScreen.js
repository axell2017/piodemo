import React from 'react';
import { Alert, ScrollView, StyleSheet, Button, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Constants, WebBrowser } from 'expo';


export default class ClaimScreen extends React.Component {

    state = {
      result: null,
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button
            style={styles.paragraph}
            title="Open WebBrowser"
            onPress={this._handlePressButtonAsync}
          />
          <Text>{this.state.result && JSON.stringify(this.state.result)}</Text>
        </View>
      );
    }
  
    _handlePressButtonAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://passiton-efaa5.appspot.com/');
      this.setState({ result });
    };
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
});




