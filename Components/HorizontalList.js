import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HorizontalCard from './HorizontalCard';
import { FlatList } from 'react-native';
import image from '../utilities/images/2.jpg';


const data = [
  {
      id: 1,
      name: 'Cafe Bistrovia',
      fees: 'Rs. 100',
      minOrder: 'Rs. 49',
      image: { image },
      type: 'Fast Food'
    },
    {
      id: 2,
      name: 'Cafe Bistrovia',
      fees: 'Rs. 100',
      minOrder: 'Rs. 49',
      image: { image },
      type: 'Fast Food'
    },
    {
      id: 3,
      name: 'Cafe Bistrovia',
      fees: 'Rs. 100',
      minOrder: 'Rs. 49',
      image: { image },
      type: 'Fast Food'
    }
]



export default class HorizontalList extends Component {
  render() {
    return (
      <View style={{marginBottom:10}}>
        <FlatList 
        horizontal={true}
            data={data}
            renderItem={({ item }) => <HorizontalCard item={item} navigation={this.props.navigation}/>}/>

        
      </View>
    );
  }
}
