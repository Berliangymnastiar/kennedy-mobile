import React, {useState} from 'react';
import axios from 'axios';
import {API_URL} from '@env';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import imageBackground from '../../assets/images/forgot-image.png';
import arrowBack from '../../assets/images/chevron-left.png';

import styles from './style';

const NewPassword = props => {
  const code = props.route.params.code;
  const email = props.route.params.email;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);

  const onChangePassword = () => {
    if (password === '') {
      return setError('Please input new password');
    }
    if (confirmPassword === '') {
      return setError('Please input confirm password');
    }
    if (password.length <= 6) {
      return setError('Password must contain have 6 or more characters');
    }
    if (password !== confirmPassword) {
      return setError('Password not match!');
    }

    const data = new URLSearchParams();
    data.append('email', email);
    data.append('code', code);
    data.append('password', password);

    axios
      .patch(`${API_URL}/users/change-password`, data)
      .then(res => {
        console.log(res);
        props.navigation.navigate('Login');
        return ToastAndroid.show(
          'Success change password!',
          ToastAndroid.SHORT,
        );
      })
      .catch(err => console.log(err));
  };

  return (
    <ImageBackground
      source={imageBackground}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.wrapTextBack}>
        <Image
          source={arrowBack}
          onPress={() => props.navigation.navigate('Login')}
        />
        <Text
          style={styles.textBack}
          onPress={() => props.navigation.navigate('Login')}>
          Back
        </Text>
      </View>
      <Text style={styles.text}>THAT’S OKAY, WE GOT YOUR BACK </Text>
      <Text style={styles.textLabel}>
        Enter new password for change password
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your new password"
        placeholderTextColor={'#000000'}
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={[styles.textInput, {marginTop: 10}]}
        placeholder="Confirm your password"
        placeholderTextColor={'#000000'}
        onChangeText={value => setConfirmPassword(value)}
        value={confirmPassword}
        secureTextEntry
      />
      {error && (
        <View style={styles.wrapperError}>
          <Text style={styles.textError}>{error}</Text>
        </View>
      )}
      <TouchableOpacity onPress={onChangePassword}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default NewPassword;
