import React, {useState} from 'react';
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

    const data = new URLSearchParams();
    data.append('email', email);
    data.append('password', password);

    // props.onLogin(data, props.navigation);

    dispatch(loginAction(data, props.navigation));
    // setIsLoading(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);
  };

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
          placeholderTextColor="#000000"
          value={email}
          onChangeText={value => {
            setEmail(value);
            setError(false);
          }}
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
        {error && (
          <View style={styles.wrapperError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
        <View style={styles.textConfirmation}>
          <Text style={styles.textHaveAccount}>Don’t have account?</Text>
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
    onLogin: (data, navigation) => {
      dispatch(loginAction(data, navigation));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
