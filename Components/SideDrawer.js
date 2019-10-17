import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  render() {
    return (
        <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
      >
        Login with Facebook
      </Icon.Button>
    );
  }
}

