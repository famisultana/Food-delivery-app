import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import image from '../utilities/images/2.jpg';


const data = {
  id: 1,
  name: 'Cafe Bistrovia',
  fees: 'Rs. 100',
  minOrder: 'Rs. 49',
  image: { image },
  type: 'Fast Food'
}


const HorizontalCard = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} style={styles.cardStyle}>
        <View style={styles.cardInfo}>
          <View style={{marginLeft:15}}>
            <Text style={styles.textStyle}>{data.name}</Text>
            <Text style={styles.textStyle}>{data.type}</Text>
          </View>
          <View style={{marginRight:15}}>
            <Text style={styles.textStyle}>{data.fees}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  cardStyle: {
    shadowOpacity: 20,
    backgroundColor: '#eaecef',
    marginVertical: 10,
    width: '100%',
    height: 240,
    shadowColor: 'black',
    justifyContent: 'flex-end'
  },

  cardInfo: {
    height: 60,
    backgroundColor: 'black',
    color: 'red',
    backgroundColor: 'rgba(0,0,0, 0.6)',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  textStyle:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }

});

export default HorizontalCard;
