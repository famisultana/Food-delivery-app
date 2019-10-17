import React, { Component } from 'react';
import VerticalCard from './VerticalCard';
import { FlatList } from 'react-native';
import image from '../Images/2.jpg';
import HorizontalCard from './HorizontalCard';

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
  


class VerticalList extends Component {
    render() {
        return (
            <FlatList 
            data={data}
            renderItem={({ item }) => <VerticalCard item={item}/>}/>
        );
    }
}

export default VerticalList;