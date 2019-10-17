import React from 'react';
import {View, Text} from 'react-native';

const ColoredText = props => {
  return (
    <View style={[props.style]}>
      <Text style={{color: 'white'}}>
        {props.white}
        <Text
          onPress={props.onPress}
          style={{color: '#7ae43a', textDecorationLine: 'underline'}}>
          {props.green}
        </Text>
      </Text>
    </View>
  );
};

export default ColoredText;
