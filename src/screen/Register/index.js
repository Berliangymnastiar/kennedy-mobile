import axios from 'axios';
import {API_URL} from '@env';
import React, {useState} from 'react';
import SpinnerButton from 'react-native-spinner-button';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import imageBackground from '../../assets/images/register-image.png';
import styles from './style';
import {connect, useDispatch} from 'react-redux';
import {CHANGE_LOADING} from '../../redux/reducer/actionString';

const Register = ({navigation, auth}) => {
  const isLoading = auth.isLoading;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!email.includes('@')) {
      return setError('Email not valid');
    }
    if (email === '') {
      return setError('Email must be field');
    }
    if (password === '') {
      return setError('Password must be field');
    }
    if (name === '') {
      return setError('Password must be field');
    }

    const data = new URLSearchParams();
    data.append('email', email);
    data.append('name', name);
    data.append('password', password);

    dispatch({type: CHANGE_LOADING, payload: true});
    axios
      .post(`${API_URL}/auth/register`, data)
      .then(res => {
        dispatch({type: CHANGE_LOADING, payload: false});
        console.log(res);
        navigation.navigate('Login');
        return ToastAndroid.show(
          'success register! login now',
          ToastAndroid.SHORT,
        );
      })
      .catch(err => {
        dispatch({type: CHANGE_LOADING, payload: false});
        console.log(err);
      });

    // setIsLoading(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);
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
          placeholderTextColor="#000000"
          keyboardType="email-address"
          value={email}
          onChangeText={value => {
            setEmail(value);
            setError(false);
          }}
        />
        <TextInput
          style={styles.textInputMobile}
          placeholder="Username"
          placeholderTextColor="#000000"
          value={name}
          onChangeText={value => {
            setName(value);
            setError(false);
          }}
        />
        <TextInput
          style={styles.textInputPassword}
          placeholder="Password"
          placeholderTextColor="#000000"
          value={password}
          onChangeText={value => {
            setPassword(value);
            setError(false);
          }}
          secureTextEntry
        />
        {error && (
          <View style={styles.wrapperError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
        <SpinnerButton
          onPress={onSubmit}
          isLoading={isLoading}
          spinnerType="BallIndicator"
          buttonStyle={styles.button}
          indicatorCount={10}>
          <View>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </SpinnerButton>

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
};

const mapStateToProps = ({auth}) => ({
  auth,
});

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: (data, navigation) => {
//       dispatch(loginAction(data, navigation));
//     },
//   };
// };

export default connect(mapStateToProps)(Register);
