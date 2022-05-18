import React, {useEffect, useRef, useState} from 'react';
import socket from '../../component/Socket';
import SpinnerButton from 'react-native-spinner-button';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import imageBackground from '../../assets/images/login-image.png';
import {loginAction} from '../../redux/action/authAction';
import styles from './style';
import {connect} from 'react-redux';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();
  // console.log(props.auth.error);
  // console.log(props.auth);
  // console.log(props.auth.isLogin);

  // console.log(error);

  const onSubmit = () => {
    if (email === '') {
      return setErrorMessage('E-mail cannot be empty');
    }
    if (!email.includes('@')) {
      return setErrorMessage('Invalid email');
    }
    if (password === '') {
      return setErrorMessage('Password cannot be empty');
    }

    const data = new URLSearchParams();
    data.append('email', email);
    data.append('password', password);

    dispatch(loginAction(data));
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    const errorLogin = props.auth.error;
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (props.auth.isLogin === true) {
        socket.on('connect');
        props.navigation.replace('Main-Tabs');
      }
      if (errorLogin?.includes(404) === true) {
        return setErrorMessage('Email not found!');
      }
      if (errorLogin?.includes(401) === true) {
        return setErrorMessage('Incorrect email or password');
      }
    }
  }, [props.auth.error, props.auth.isLogin]);

  return (
    <>
      <ImageBackground
        source={imageBackground}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>LET’S EXPLORE THE WORLD </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#5C5B5B"
          value={email}
          onChangeText={value => {
            setEmail(value);
            setErrorMessage(false);
          }}
        />
        <TextInput
          style={styles.textInputPassword}
          placeholder="Password"
          placeholderTextColor="#5C5B5B"
          value={password}
          onChangeText={value => {
            setPassword(value);
            setErrorMessage(false);
          }}
          secureTextEntry
        />
        <Text
          style={styles.forgotPass}
          onPress={() => {
            props.navigation.navigate('Forgot-Password');
          }}>
          Forgot Password
        </Text>
        <SpinnerButton
          onPress={onSubmit}
          isLoading={props.auth.isLoading}
          spinnerType="BallIndicator"
          buttonStyle={styles.button}
          indicatorCount={10}>
          <View>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </SpinnerButton>
        {errorMessage && (
          <View style={styles.wrapperError}>
            <Text style={styles.textError}>{errorMessage}</Text>
          </View>
        )}
        <View style={styles.textConfirmation}>
          <Text style={styles.textHaveAccount}>Don’t have account? </Text>
          <Text
            style={styles.textSignUp}
            onPress={() => {
              props.navigation.navigate('Register');
            }}>
            Sign up now
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

const mapStateToProps = ({auth}) => ({
  auth,
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: data => {
      dispatch(loginAction(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
