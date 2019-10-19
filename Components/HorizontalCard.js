import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import image from '../utilities/images/1.jpg';


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
    <View style={styles.container}>
      <ImageBackground source={image}style={styles.cardStyle} >
        <View style={styles.cardInfo}>
          <Text style={{color:'white'}}>{data.name}</Text>
          <Text style={{color:'white'}}>{data.type}</Text>
        </View>
        </ImageBackground>   
         </View>
  );
};


const styles = StyleSheet.create({
 container:{
height:200,
width:260
 },

cardStyle:{
     shadowOpacity: 20,
    backgroundColor: '#eaecef',
    marginVertical: 10,
    width: '100%',
    height:'100%',
    shadowColor: 'black',
    justifyContent: 'flex-end'
},
 cardInfo:{
   color:'white'

 },


});

export default HorizontalCard;
