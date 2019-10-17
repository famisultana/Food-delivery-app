import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Categories from './Screens/Categories';
import Home from './Screens/Home';
import SignIn from './Screens/SignIn';
import EnterCode from './Screens/EnterCode';
import SignUp from './Screens/SignUp';

const RootStack = createStackNavigator(
  {
    SignIn:SignIn,
    SignUp:SignUp,
    EnterCode:EnterCode,  
    Categories: Categories,
    MainScreen:Home,
  },
  {
    initialRouteName: 'SignIn',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}