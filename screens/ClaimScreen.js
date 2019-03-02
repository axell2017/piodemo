import React from 'react';
import { ScrollView, StyleSheet, Button, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


export default class ClaimScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
//This constructor doesnt appear to do anything for the CreditCardInput
  constructor(props) {
    super(props);
  _onChange => form => console.log(form);
  }

  render() {
    //this const gives navigation functionality to the button
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
        <CreditCardInput onChange={this._onChange} />
        <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"/>
        <Button
            onPress={() => navigate('Home')}
            title="Back to homepage"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"/>
      </ScrollView>
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
