import React, { Component } from 'react';
import image from '../utilities/images/1.jpg';
import image2 from '../utilities/images/2.jpg';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';

class VerticalCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <View style={{flexDirection:'row'}}>
                    <Image source={image2} style={styles.logo} />
                    <View style={{marginLeft:120}}>
                        <Text style={styles.heading}>Delizia</Text>
                        <Text>Cakes, Biscuits, Bakery items</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#d6d7da'
    },
    cardStyle: {
        shadowOpacity: 20,
        backgroundColor: '#eaecef',
        marginVertical: 10,
        marginHorizontal: 10,
        width: 300,
        height: 100,
        shadowColor: 'black',
        justifyContent: 'flex-end',

    },

    cardInfo: {
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between'
    },

text:{
    fontSize:18,
    color:'red'
},

    image: {
        height: 180,
        width: '100%'
    },

    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        top: -50,
        marginLeft: 15
    },

    heading:{
        color:'black',
        fontWeight:'bold',
        fontSize:20
    }

});



export default VerticalCard;