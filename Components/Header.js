import React from 'react';
import { Button, View, Text ,StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
       
      </View>
    );
  }
}

const styles=StyleSheet.create({
container:{
  height:80,
  backgroundColor:'red'
}
});
