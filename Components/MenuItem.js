import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../utilities/colors';
import image from '../utilities/images/cake.jpg';

class MenuItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={image} style={styles.image} />
                <View>
                    <Text style={styles.ItemName}>Chocolate cake</Text>
                    <Text style={styles.ItemDescription}>2 lb</Text>
                </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.ItemPrice}>Rs. 930</Text>
                    <Icon name="plus-square" style={styles.addButton} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderBottomWidth: 0.5,
        margin: 10,
        paddingBottom: 10,
        marginTop: 0,
        justifyContent: 'space-between'
    },

    image: {
        height: 80,
        width: 100
    },

    ItemName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft:10
    },

    ItemDescription: {
        marginLeft:10
    },

    ItemPrice: {
        fontSize: 16,
        color: 'black',
        marginRight: 10
    },

    addButton: {
        fontSize: 18,
        color: colors.secondary
    }

});

export default MenuItem;