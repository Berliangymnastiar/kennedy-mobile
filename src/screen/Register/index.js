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
import {postRegister} from '../../utils/Auth';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Register = ({navigation, auth}) => {
  const isLoading = auth.isLoading;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (email === '') {
      return setError('E-mail cannot be empty');
    }
    if (!email.includes('@')) {
      return setError('Invalid E-mail');
    }
    if (password === '') {
      return setError('Password cannot be empty');
    }
    if (password.length <= 6) {
      return setError('Password must contain 6 or more characters');
    }
    if (name === '') {
      return setError('Username cannot be empty');
    }

    const data = new URLSearchParams();
    data.append('email', email);
    data.append('name', name);
    data.append('password', password);

    dispatch({type: CHANGE_LOADING, payload: true});
    postRegister(data)
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
        if (err.message.includes(409) === true) {
          return setError('Register failed! Email already exist');
        }
      });
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
          placeholderTextColor="#5C5B5B"
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
          placeholderTextColor="#5C5B5B"
          value={name}
          onChangeText={value => {
            setName(value);
            setError(false);
          }}
        />
        <TextInput
          style={styles.textInputPassword}
          placeholder="Password"
          placeholderTextColor="#5C5B5B"
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
