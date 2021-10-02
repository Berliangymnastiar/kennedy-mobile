// import axios from 'axios';
import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {API_URL} from '@env';

import imageBackground from '../../assets/images/login-image.png';
import {loginAction} from '../../redux/action/authAction';
import {vehicleAction} from '../../redux/action/vehicleAction';
import styles from './style';
// import config from '../../../config';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = new URLSearchParams();
    data.append('email', email);
    data.append('password', password);

    dispatch(loginAction(data, navigation));
  };
  return (
    <>
      <ImageBackground
        source={imageBackground}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>LET’S EXPLORE THE WORLD </Text>
        {/* <Text style={{color: 'black', fontSize: 42}}>{config.API_URL}</Text> */}
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#000000"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={styles.textInputPassword}
          placeholder="Password"
          placeholderTextColor="#000000"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <Text
          style={styles.forgotPass}
          onPress={() => {
            navigation.navigate('Forgot-Password');
          }}>
          Forgot Password
        </Text>
        <TouchableOpacity onPress={onSubmit}>
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
    </>
  );
}

export default Login;
