import React, { Component } from 'react';
import {Text,View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class CartButton extends Component {
    render() {
        return (
            <View style={styles.container}><Icon name='shopping-cart' style={styles.icon}/></View>
        );
    }
}


const styles= StyleSheet.create({
container:{
    height:60,
    width:60,
    borderRadius:30,
    position:"absolute",
    alignSelf:'flex-end',
    bottom:0,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    right:5
},

icon:{
    fontSize:30,
    color:'white'
}
});

export default CartButton;