import React from 'react';
import { Button, View, Text ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon.Button
    name="bars"
    backgroundColor="#3b5998"
    color='red'
  
  >
    Login with Facebook
  </Icon.Button>
  <Icon name="shopping-cart" color="blue">

  </Icon>
      </View>
    );
  }
}

const styles=StyleSheet.create({
container:{
  height:80,
  backgroundColor:'gray'
}
});
