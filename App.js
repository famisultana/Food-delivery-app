import React from 'react';
import { Button, View, Text ,TouchableWithoutFeedback} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Categories from './Screens/Categories';
import Home from './Screens/Home';
import SignIn from './Screens/SignIn';
import EnterCode from './Screens/EnterCode';
import SignUp from './Screens/SignUp';
import Restaurants from './Screens/Restaurant';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from './utilities/colors';
import SplashScreen from './Screens/SplashScreen';
import LocationBar from './Components/LocationBar';
import GroceryList from './Screens/GroceryList';

const RootStack = createStackNavigator(
  {
    Splash:SplashScreen,
    SignIn: SignIn,
    SignUp: SignUp,
    EnterCode: EnterCode,
    Categories: Categories,
    MainScreen: Home,
    GroceryList, GroceryList,
    Restaurant:Restaurants,
  },
  {
    initialRouteName: 'Restaurant',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.secondary,
        
      },
      headerTintColor:colors.headerFont,
      headerTitle:(
        <LocationBar/>
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf:'center',
        justifyContent:'center'
      },
      headerLeft: (
        <TouchableWithoutFeedback>
          <Icon
          name="bars"
          color={colors.headerFont}
          style={{ fontSize: 20, marginLeft: 10 }}
          onPress={() => alert('back')}
        >
        </Icon>
        </TouchableWithoutFeedback>
      ),
      headerRight: (
        <TouchableWithoutFeedback>
          <Icon
          name='shopping-cart'
          color={colors.headerFont}
          style={{ fontSize: 20, marginRight: 10 }}
        >
        </Icon>
        </TouchableWithoutFeedback>
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