import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import foodImage from '../utilities/images/food.jpg';
import groceryImage from '../utilities/images/grocery.jpg';
import colors from '../utilities/colors';
import Header from '../Components/Header';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class Categories extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.category}>
                    <ImageBackground source={foodImage} style={styles.image}>
                        <Text style={styles.text}>Food</Text>
                    </ImageBackground>
                </View>

                <View style={styles.category}>
                    <ImageBackground source={groceryImage} style={{ width: '100%', height: '100%' }}>
                        <Text style={styles.text}>Grocery</Text>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        height:screenHeight,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    category: {
        height: screenHeight / 3,
        width: '90%',
        marginBottom:20
    },
    text: {
        fontSize: 54,
        color: 'white',
        opacity:1,
        margin:10
    },
    image:{
        width: '100%',
        height: '100%'

    }
});

export default Categories;