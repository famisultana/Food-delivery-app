import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name='search' style={{fontSize:16, margin:10}}></Icon>
                <TextInput placeholder="Search"/>
                <Icon name='sort-alpha-down' style={{fontSize:18 ,position:'absolute', right:10}}/>
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
        padding: 2,
        alignItems: 'center',
        borderRadius:2,
        elevation:1
    }
});


export default SearchBar;