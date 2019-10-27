import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import TabBar from '../Components/TabBar';
import CategoriesTab from '../Components/CategoriesTab';


class GroceryList extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <SearchBar/>
                <TabBar/>
            </View>
        );
    }
}

export default GroceryList;