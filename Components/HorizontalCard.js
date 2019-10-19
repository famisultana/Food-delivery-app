import React from 'react';
import { View, Text,  Image, StyleSheet, Dimensions,TouchableWithoutFeedback } from 'react-native';
import image from '../utilities/images/1.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const data = {
  id: 1,
  name: 'Delizia',
  fees: 'Rs. 100',
  minOrder: 'Rs. 49',
  image: { image },
  type: 'Cakes, Biscuits and Bakery items'
}


const HorizontalCard = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Restuarant')}>
      <View style={styles.container}>
      <Image source={image} style={styles.cardStyle} />
      <View style={{
        justifyContent: 'center',
        height: '35%',
        padding: 5
      }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{data.name}</Text>
        <Text style={{ color: 'black' }}>{data.type}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View style={styles.cardInfo}><Icon name='check-circle' style={styles.icon} /><Text>No minimum</Text></View>
          <View style={styles.cardInfo}><Icon name='map-marker-alt' style={styles.icon} /><Text>Malir Cantt</Text></View>
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    borderWidth:0.5,
    borderColor: '#d6d7da',
    height: 230,
    width: width * 4 / 5,
    marginHorizontal: 10,
  },

  cardStyle: {
    width: '100%',
    height: '65%',
  },

  cardInfo: {

    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 5
  },

  icon: {
    fontSize: 20,
    marginRight: 8,
    color: 'green'
  }


});

export default HorizontalCard;
