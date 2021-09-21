import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import imageBackground from '../../assets/images/register-image.png';
import styles from './style';

const Register = ({navigation}) => (
  <ScrollView style={styles.container}>
    <ImageBackground
      source={imageBackground}
      resizeMode="cover"
      style={styles.image}>
      <Text style={styles.text}>LET’S HAVE SOME RIDE </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={'black'}
      />
      <TextInput
        style={styles.textInputMobile}
        placeholder="Mobile Phone"
        placeholderTextColor={'black'}
      />
      <TextInput
        style={styles.textInputPassword}
        placeholder="Password"
        placeholderTextColor={'black'}
        secureTextEntry
      />
      <Text style={styles.forgotPass} onPress={() => {}}>
        Forgot Password
      </Text>
      <TouchableOpacity
        onPress={() => {
          /* do this */
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textConfirmation}>
        <Text style={styles.textHaveAccount}>Already have account?</Text>
        <Text
          style={styles.textSignUp}
          onPress={() => navigation.navigate('Login')}>
          {' '}
          Login
        </Text>
      </View>
    </ImageBackground>
  </ScrollView>
);

export default Register;
