import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.heading}>{props.title}</Text>
      <Text style={styles.subheading}> {props.subtitles} </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {},

  heading: {
    fontSize: 34,
    color: '#7ae43a',
    fontWeight: '400',

    alignSelf: 'center',
  },
  subheading: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
});
