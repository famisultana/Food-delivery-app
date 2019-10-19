import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback>
                    <Icon name="th-large" style={{ fontSize: 16, margin: 10 }} />
                </TouchableWithoutFeedback>
                <Text style={{ borderRightColor: 'gray', borderRightWidth: 0.5, paddingRight: 10 }}>Categories</Text>
                <Icon name='search' style={{ fontSize: 16, margin: 10 }}></Icon>
                <TextInput placeholder="Search" style={{ width: 180 }} />
                <Icon name='sort-alpha-down' style={{ fontSize: 18, position: 'absolute', right: 10 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        height: 50,
        margin: 10,
        alignItems: 'center',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        elevation: 1
    }
});


export default SearchBar;