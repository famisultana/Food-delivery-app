import React, {Component} from 'react';
import {View} from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import image from '../utilities/images/bgimage.jpg';
import Inputbox from '../Components/Inputbox';
import Heading from '../Components/Heading';
import ColoredText from '../Components/ColoredText';
import MyBackgroundImage from '../Components/MyBackgroundImage';
import colors from '../utilities/colors';

import {
  Dimensions,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  BackHandler
} from 'react-native';

export default class SignUp extends Component {

  static navigationOptions = {
    header: null};
  state = {
    ischecked: false,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
}

onBackButtonPressed() {
    return true;
}

  render() {
    const buttoncolor = this.state.ischecked ? 'red' : 'grey';
    return (
      <View>
        <MyBackgroundImage source={image} opacity={0.7}>
          <KeyboardAvoidingView
            behavior="padding"
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Heading title="SIGN UP" subtitles="Add Your Details"></Heading>
            </View>

            <View style={{flex: 4, justifyContent: 'center'}}>
              <Inputbox
                name="Name"
                type="name"
                placeholder="Enter Your Name"></Inputbox>
              <Inputbox
                name="Phone"
                type="phone"
                placeholder="0303-XXXXXXX"></Inputbox>

              <View
                style={{
                  marginTop: '5%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5%',
                }}>
                {/* <CheckBox
                  onChange={() => this.setState({ischecked: true})}></CheckBox> */}
                <ColoredText
                  white="I agree with "
                  green="Terms and Condition"
                  onPress={() =>
                    alert('Terms and conditions pressed')
                  }></ColoredText>
              </View>

              <Button
                disabled={this.props.ischecked === false ? true : false}
                title="Sign Up"
                color={buttoncolor}></Button>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  marginBottom: '20%',
                  alignItems: 'center',
                }}>
                <ColoredText
                  white="I already have "
                  green="an account"
                  onPress={() => this.props.navigation.navigate('SignIn')}></ColoredText>
              </View>
            </View>
          </KeyboardAvoidingView>
        </MyBackgroundImage>
      </View>
    );
  }
}
