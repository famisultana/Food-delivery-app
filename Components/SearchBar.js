import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name='search' style={{fontSize:16, marginLeft:5}}></Icon>
                <Text style={{marginLeft:10}}>Search</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        height: 50,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius:2,
        elevation:1,
    }
});


export default SearchBar;