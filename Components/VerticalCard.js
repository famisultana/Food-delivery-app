import React, { Component } from 'react';
import image from '../utilities/images/1.jpg';
import image2 from '../utilities/images/2.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';

class VerticalCard extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Restuarant')}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={image2} style={styles.logo} />
                        <View style={{}}>
                            <Text style={styles.heading}>Delizia</Text>
                            <Text>Cakes, Biscuits, Bakery items</Text>
                        </View>
                    </View>
                    <Image source={image} style={styles.image} />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <View style={styles.cardInfo}><Icon name='check-circle' style={styles.icon} /><Text>No minimum</Text></View>
                        <View style={styles.cardInfo}><Icon name='map-marker-alt' style={styles.icon} /><Text>Malir Cantt</Text></View>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#d6d7da',
        margin: 10,
        marginTop: 0
    },
    text: {
        fontSize: 18,
        color: 'red'
    },

    image: {
        height: 160,
        width: '100%'
    },

    logo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 8

    },

    heading: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    cardInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    icon: {
        fontSize: 20,
        marginRight: 8,
        color: 'green'
    }

});



export default VerticalCard;