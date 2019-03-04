import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';


export default class AuthScreen extends React.Component {

  componentDidMount(){
    this.checkIfLoggedIn();
  }

  //checks if user logged in, will direct to relevant page
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        console.log('Auth State Changed Called ')
      if (user)
        {
          this.props.navigation.navigate('Main');
        }
      else
        {
          this.props.navigation.navigate('Login');
        }
    }.bind(this)
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignitems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});



