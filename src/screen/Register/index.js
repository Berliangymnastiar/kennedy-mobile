import axios from 'axios';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import imageBackground from '../../assets/images/register-image.png';
import styles from './style';

function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = new URLSearchParams();
    data.append('email', email);
    data.append('name', name);
    data.append('password', password);

    axios
      .post(`http://192.168.1.100:8000/auth/register`, data)
      .then(res => {
        console.log(res);
        return ToastAndroid.show(
          'success register! login now',
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
      <ScrollView>
        <Text style={styles.text}>LET’S HAVE SOME RIDE </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={'black'}
          keyboardType="email-address"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={styles.textInputMobile}
          placeholder="Username"
          placeholderTextColor={'black'}
          value={name}
          onChangeText={value => setName(value)}
        />
        <TextInput
          style={styles.textInputPassword}
          placeholder="Password"
          placeholderTextColor={'black'}
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <TouchableOpacity onPress={onSubmit}>
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
      </ScrollView>
    </ImageBackground>
  );
}

export default Register;
