import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../utilities/colors';


class CategoryItem extends Component {
    render() {
        return (
            <View style={{
                padding:10,
                borderColor:colors.primary,
                borderWidth:1,
                marginBottom:10,
               marginRight:8,
               borderRadius:2,

            }}>
                <Text style={{
                    color:'black',
                    fontSize:14
                }}>{this.props.name}</Text>
            </View>
        );
    }
}

export default CategoryItem;