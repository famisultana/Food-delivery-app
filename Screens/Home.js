import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Heading from '../Components/Heading';
import HorizontalList from '../Components/HorizontalList';
import VerticalList from '../Components/VerticalList';

export default class Home extends Component {
  render() {
    return (
      <View>
        <View style={{width: '100%', height: 60, backgroundColor: 'red'}}>
          <Heading title="Home"></Heading>
        </View>
        <View
          style={{
            height: 40,
            borderBottomColor: 'grey',
            margin: 20,

            borderWidth: 1,
          }}>
          <Text>search bar hai ye </Text>
        </View>

        <VerticalList/>
      </View>
    );
  }
}
