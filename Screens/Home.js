import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Heading from '../Components/Heading';
import HorizontalList from '../Components/HorizontalList';
import VerticalList from '../Components/VerticalList';
import SearchBar from '../Components/SearchBar';
import CategoryItem from '../Components/CategoryItem';



export default class Home extends Component {
  render() {
    return (
      <View>
        <SearchBar />
        <ScrollView>
          <Heading title='Most popular' style={{ color: 'black', fontSize: 24 }} />
          <HorizontalList navigation={this.props.navigation} />

          <Heading title="All Restuarants" style={{ color: 'black', fontSize: 24 }} />
          <VerticalList navigation={this.props.navigation} />
        </ScrollView>

      </View>
    );
  }
}
