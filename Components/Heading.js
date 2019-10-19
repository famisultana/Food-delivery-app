import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utilities/colors';

const Heading = props => {
  const subtitle=()=>{
    if(props.subtitle){
      return (<Text style={[styles.subtitle, props.style]}>{props.subtitle}</Text>);
    }
  }
  return (
    <View>
      <Text style={[styles.text, props.style]}>{props.title}</Text>
      {subtitle}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: colors.secondary,
    fontWeight: 'bold',
    margin: 10
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: 20,
    color: colors.headerFont
  }

});
