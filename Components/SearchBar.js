import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name='search'></Icon>
                <Text>Search</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'red',
        height: 50,
        margin: 10,
        padding: 10,
        alignContent: 'center',
        justifyContent: 'space-between'
    }
});


export default SearchBar;