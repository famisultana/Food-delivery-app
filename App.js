import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SignIn from './Screens/SignIn';
import EnterCode from './Screens/EnterCode';
import Home from './Screens/Home';
import Categories from './Screens/Categories';

export default class App extends Component {
  render() {
    return (
      <View >
     <Categories/>
      </View>
    );
  }
}
