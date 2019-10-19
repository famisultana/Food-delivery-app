import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import image from '../utilities/images/logo.png';

class Logo extends Component {
    render() {
        return (
            <View style={styles.container}><Image source={image} style={styles.image} /></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 40,
        alignSelf: 'center'
    },
    image: {
        height: 80,
        width: 220
    }
});
export default Logo;