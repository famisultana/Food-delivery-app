import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import colors from '../utilities/colors';

export default class Inputbox extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.heading}>{this.props.name}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          placeholderTextColor="#e1e8ed"
          secureTextEntry={this.props.type === 'password' ? true : false}
          style={styles.inputbox}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 10,
  },
  inputbox: {
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: 'white',

    color: 'white',
    fontSize: 15,
  },
  heading: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: '600',
  },
});
