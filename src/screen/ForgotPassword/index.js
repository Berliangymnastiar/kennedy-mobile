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
import {connect, useDispatch} from 'react-redux';
import imageBackground from '../../assets/images/forgot-image.png';
import arrowBack from '../../assets/images/chevron-left.png';

import styles from './style';
import {CHANGE_LOADING} from '../../redux/reducer/actionString';
import AnimatingLoading from '../../component/ActivityIndicator';

const ForgotPassword = props => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onSubmitEmail = () => {
    if (email === '') {
      return setError('Please input your email!');
    }
    const data = new URLSearchParams();
    data.append('email', email);
    dispatch({type: CHANGE_LOADING, payload: true});
    axios
      .post(`${API_URL}/users/forgot-password`, data)
      .then(res => {
        console.log(res);
        dispatch({type: CHANGE_LOADING, payload: false});
        props.navigation.navigate('Check-Code', {email: email});
        return ToastAndroid.show('Success get code', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log(err);
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
            placeholderTextColor={'#4E4E4E'}
            onChangeText={value => {
              setEmail(value);
              setError(false);
            }}
            value={email}
          />
          {error && (
            <View style={styles.wrapperError}>
              <Text style={styles.textError}>{error}</Text>
            </View>
          )}
          <TouchableOpacity onPress={onSubmitEmail}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get Code</Text>
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

export default connect(mapStateToProps)(ForgotPassword);
