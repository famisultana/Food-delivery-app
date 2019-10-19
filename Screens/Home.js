import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Heading from '../Components/Heading';
import HorizontalList from '../Components/HorizontalList';
import VerticalList from '../Components/VerticalList';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import CartButton from '../Components/CartButton';

export default class Home extends Component {
  render() {
    return (
      <View>      
        <SearchBar/>
        <HorizontalList/>
        <VerticalList/>
        <CartButton/>
      </View>
    );
  }
}
