import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions,TouchableNativeFeedback } from 'react-native';
import foodImage from '../utilities/images/food.jpg';
import groceryImage from '../utilities/images/grocery.jpg';
import colors from '../utilities/colors';
import Header from '../Components/Header';
import MyBackgroundImage from '../Components/MyBackgroundImage';
import background from '../utilities/images/wooden.jpg';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class Categories extends Component {
    render() {
        return (
            
                <MyBackgroundImage source={background}>
    
                <View style={styles.container}>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('MainScreen')}>
                <View style={styles.category}>
                    <ImageBackground source={foodImage} style={styles.image}>
                        <Text style={styles.text}>Food</Text>
                    </ImageBackground>
                </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                <View style={styles.category}>
                    <ImageBackground source={groceryImage} style={{ width: '100%', height: '100%' }}>
                        <Text style={styles.text}>Grocery</Text>
                    </ImageBackground>
                </View>
                </TouchableNativeFeedback>
                </View>
            </MyBackgroundImage>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:screenHeight,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    category: {
        height: screenHeight / 3,
        width: '90%',       
    },
    text: {
        fontSize: 45,
        color: 'white',
        opacity:1,
        padding:10,
        backgroundColor:'rgba(0,0,0,0.4)',
    },
    image:{
        width: '100%',
        height: '100%'

    }
});

export default Categories;