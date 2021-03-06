import React, {Component} from 'react';
import {Button, View, KeyboardAvoidingView,BackHandler} from 'react-native';
import MyBackgroundImage from '../Components/MyBackgroundImage';
import image from '../utilities/images/bgimage.jpg';
import Heading from '../Components/Heading';
import Inputbox from '../Components/Inputbox';
import colors from '../utilities/colors';
import ColoredText from '../Components/ColoredText';
import Logo from '../Components/Logo';

export default class EnterCode extends Component {
  static navigationOptions = {
    header: null};
    
  render() {
    return (
      <MyBackgroundImage source={image} opacity={0.7}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <Logo/>
          <Heading title="Enter Code" subtitle="from SMS"></Heading>
          <Inputbox
            name="Code"
            placeholder="Enter 4 digit code here"
            style={{}}></Inputbox>
          <View style={{width: '100%', paddingLeft: 30, paddingRight: 30}}>
            <Button title="Done" color={colors.secondary}
            onPress={() => this.props.navigation.navigate('Categories')}
            ></Button>
          </View>

          <ColoredText
            white="Did Not Recieve SMS?"
            green=" RESEND"
            style={{marginBottom: '10%'}}
            onPress={() => alert('resend sms')}></ColoredText>
        </KeyboardAvoidingView>
      </MyBackgroundImage>
    );
  }
}
