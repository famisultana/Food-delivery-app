import React, { Component } from 'react';
import MenuItem from './MenuItem';
import {FlatList} from 'react-native';
import image from '../utilities/images/2.jpg'

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
  


class MenuList extends Component {
    render() {
        return (
            <FlatList 
            data={data}
            renderItem={({ item }) => <MenuItem item={item}/>}/>
        );
    }
}

export default MenuList;