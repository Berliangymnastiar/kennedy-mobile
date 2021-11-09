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
import {connect, useDispatch} from 'react-redux';
import {CHANGE_LOADING} from '../../redux/reducer/actionString';
import AnimatingLoading from '../../component/ActivityIndicator';

const CheckCode = props => {
  const email = props.route.params.email;
  const [code, setCode] = useState(null);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onSendCode = () => {
    if (code === null) {
      return setError('Please input your code for change password');
    }
    const data = new URLSearchParams();
    data.append('email', email);
    data.append('code', code);
    dispatch({type: CHANGE_LOADING, payload: true});
    axios
      .post(`${API_URL}/users/check-code`, data)
      .then(res => {
        console.log(res);
        dispatch({type: CHANGE_LOADING, payload: false});
        props.navigation.navigate('New-Password', {code: code, email: email});
        return ToastAndroid.show('Success send code', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log(err);
        setError('Code not valid!');
        dispatch({type: CHANGE_LOADING, payload: false});
      });
  };
  return (
    <>
      {props.auth.isLoading === true ? (
        <AnimatingLoading isLoading={props.auth.isLoading} />
      ) : (
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
            Enter your code for change password
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your code"
            placeholderTextColor={'#000000'}
            onChangeText={value => {
              setCode(value);
              setError(false);
            }}
            value={code}
          />
          {error && (
            <View style={styles.wrapperError}>
              <Text style={styles.textError}>{error}</Text>
            </View>
          )}
          <TouchableOpacity onPress={onSendCode}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Send Code</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('#');
            }}>
            <View style={styles.buttonResend}>
              <Text style={styles.buttonText}>Resend Code</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(CheckCode);
