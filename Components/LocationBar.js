import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class LocationBar extends Component {
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                alignSelf: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    color: 'white',
                }}>
                    <Text style={{ color: 'white' }}>Your location</Text>
                </View>

                <Text style={{ color: 'white', fontSize:18, fontWeight:'bold' }}>NED University</Text>
            </View>
        );
    }
}



export default LocationBar;