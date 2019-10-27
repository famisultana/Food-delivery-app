import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import image from '../utilities/images/1.jpg';
import logo from '../utilities/images/2.jpg';
import TabBar from '../Components/TabBar';
import colors from '../utilities/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabNavigation from '../Components/TabNavigation';

class Restaurant extends Component {

    static navigationOptions = {
        headerStyle: {
             backgroundColor: 'rgba(0,0,0,0)',
        },
        headerTintColor: colors.headerFont,
        headerTitle: '',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            justifyContent: 'center'
        },
        headerLeft: (
            <TouchableWithoutFeedback onPress={()=>{alert('hello')}}>
                <Icon
                    name="arrow-left"
                    color={colors.headerFont}
                    style={{ fontSize: 20, marginLeft: 10,color:colors.primary }}
                >
                </Icon>
            </TouchableWithoutFeedback>
        ),
        headerRight: null
    };


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image} imageStyle={{ opacity: 0.6 }}>
                    <View style={styles.cardInfo}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textTransform: 'uppercase' }}>Delizia</Text>
                        <Text style={styles.cardText}>Cakes, Biscuits and Bakery items</Text>
                        <Text style={styles.cardText}>Malir Cantonment</Text>
                    </View>
                </ImageBackground>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 5,

                }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.infoHead}>Avg. Delivery time</Text>
                        <Text style={styles.info}>30 min</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.infoHead}>Min. Order</Text>
                        <Text style={styles.info}>No minimum</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.infoHead}>Payment</Text>
                        <Text style={styles.info}>Cash on Delivery</Text>
                    </View>
                </View>
                <TabNavigation />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',

    },

    cardInfo: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',

    },
    cardText: {
        color: 'white',
        fontSize: 18
    },
    infoHead: {
        textTransform: 'uppercase',
        fontSize: 10,
        color: colors.secondary
    },
    info: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },

});

export default Restaurant;