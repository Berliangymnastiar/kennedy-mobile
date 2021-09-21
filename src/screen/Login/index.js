import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import imageBackground from '../../assets/images/login-image.png';
import styles from './style';

const Login = ({navigation}) => (
  <ScrollView style={styles.container}>
    <ImageBackground
      source={imageBackground}
      resizeMode="cover"
      style={styles.image}>
      <Text style={styles.text}>LET’S EXPLORE THE WORLD </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
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
          navigation.navigate('Register');
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textConfirmation}>
        <Text style={styles.textHaveAccount}>Don’t have account?</Text>
        <Text
          style={styles.textSignUp}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          Sign up now
        </Text>
      </View>
    </ImageBackground>
  </ScrollView>
);

export default Login;
