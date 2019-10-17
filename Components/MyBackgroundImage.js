import React from 'react';
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';

const MyBackgroundImage = props => {
  return (
    <ImageBackground source={props.source} style={styles.Background}>
      <View
        style={[
          {backgroundColor: `rgba(0,0,0,${props.opacity ? props.opacity : 0})`},
          styles.Background,
          props.style,
        ]}>
        {props.children}
      </View>
    </ImageBackground>
  );
};

export default MyBackgroundImage;

const styles = StyleSheet.create({
  Background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
