import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen'


const AuthStack = createStackNavigator({
    Authentication: AuthScreen,
  });

//Put Navigation options for stack under here;
// LoginStack.navigationOptions = {
//     tabBarLabel: 'Contribute',
//     tabBarIcon: ({ focused }) => (
//       <TabBarIcon
//         focused={focused}
//         name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//       />



//possible that the createstacknavigator is causing the double bar on top of screen
  export default createSwitchNavigator({
    AuthStack,
  });