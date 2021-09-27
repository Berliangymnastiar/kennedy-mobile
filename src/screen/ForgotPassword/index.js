import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import imageBackground from '../../assets/images/forgot-image.png';
import arrowBack from '../../assets/images/chevron-left.png';

import styles from './style';

const ForgotPassword = ({navigation}) => {
  return (
    <ImageBackground
      source={imageBackground}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.wrapTextBack}>
        <Image
          source={arrowBack}
          onPress={() => navigation.navigate('Login')}
        />
        <Text
          style={styles.textBack}
          onPress={() => navigation.navigate('Login')}>
          Back
        </Text>
      </View>
      <Text style={styles.text}>THAT’S OKAY, WE GOT YOUR BACK </Text>
      <Text style={styles.textLabel}>
        Enter your email to get reset password code
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email adress"
        placeholderTextColor={'#000000'}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('#');
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Send Code</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('#');
        }}>
        <View style={styles.buttonResend}>
          <Text style={styles.buttonText}>Resend Code</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ForgotPassword;
