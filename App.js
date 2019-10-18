import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Categories from './Screens/Categories';
import Home from './Screens/Home';
import SignIn from './Screens/SignIn';
import EnterCode from './Screens/EnterCode';
import SignUp from './Screens/SignUp';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RootStack = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp,
    EnterCode: EnterCode,
    Categories: Categories,
    MainScreen: Home,
  },
  {
    initialRouteName: 'SignIn',

    defaultNavigationOptions: {
      headerTitle: (
        <View>
          <Text style={{ color: 'red', fontSize: 20 }}>Home</Text>
        </View>
      ),
      headerLeft: (
        <Icon.Button
          name="bars"
          color='red'
          backgroundColor='none'
          style={{ fontSize: 20, marginLeft: 10 }}
          onPress={() => alert('back')}
        >

        </Icon.Button>
      ),
      headerRight: (
        <Icon.Button
          name='shopping-cart'
          color='red'
          backgroundColor='none'
          style={{ fontSize: 20, marginRight: 10 }}
        >

        </Icon.Button>
      )
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}