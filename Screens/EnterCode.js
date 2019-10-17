import React, {Component} from 'react';
import {Button, View, KeyboardAvoidingView} from 'react-native';
import MyBackgroundImage from '../Components/MyBackgroundImage';
import image from '../utilities/images/bgimage.jpg';
import Heading from '../Components/Heading';
import Inputbox from '../Components/Inputbox';
import styles from '../Utility';
import ColoredText from '../Components/ColoredText';

export default class EnterCode extends Component {
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
          <Heading title="Enter Code" subtitles="from SMS"></Heading>
          <Inputbox
            name="Code"
            placeholder="Enter 4 digit code here"
            style={{}}></Inputbox>
          <View style={{width: '100%', paddingLeft: 30, paddingRight: 30}}>
            <Button title="Done" color={styles.Theme.color}
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
