import React, {Component} from 'react';
import {Text, View} from 'react-native';

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

export default class SignIn extends Component {

  static navigationOptions = {
    header: null
  };
    

  render() {
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
              <Heading title="SIGN IN" subtitles="Enter Your Data"></Heading>
            </View>

            <View style={{flex: 4, justifyContent: 'center'}}>
              <Inputbox
                name="Phone"
                type="phone"
                placeholder="0303-XXXXXXX"></Inputbox>
              <Inputbox
                name="Password"
                type="password"
                placeholder="******"></Inputbox>

              <View
                style={{
                  marginTop: '5%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5%',
                }}>
                <ColoredText
                  green="Forgot Password?"
                  onPress={() =>
                    alert('Redirect to forgot password Screen')
                  }></ColoredText>
              </View>

              <Button title="Sign In" color={colors.secondary}
              onPress={() => this.props.navigation.navigate('EnterCode')}
              ></Button>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  marginBottom: '20%',
                  alignItems: 'center',
                }}>
                <ColoredText
                  white="New Here? "
                  green="Sign Up"
                  onPress={() => this.props.navigation.navigate('SignUp')}></ColoredText>
              </View>
            </View>
          </KeyboardAvoidingView>
        </MyBackgroundImage>
      </View>
    );
  }
}
