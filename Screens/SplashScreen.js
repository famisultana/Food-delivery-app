import React, { Component } from 'react';
import {View, Image,StyleSheet} from 'react-native';
import logo from '../utilities/images/logo.png';
import colors from '../utilities/colors';

class SplashScreen extends Component {

    static navigationOptions = {
        header: null
      };

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.image}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:colors.secondary,
justifyContent:'center',
alignItems:'center'
},
image:{
width:'80%',
resizeMode:'contain'
}
});

export default SplashScreen;