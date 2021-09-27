// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {LOGIN, LOGOUT} from '../reducer/actionString';
import {API_URL} from '@env';

export const loginAction = (body, navigation) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, body);
      dispatch({
        type: LOGIN,
        payload: response.data.result,
      });
      // await AsyncStorage.setItem('token', response.data.result.token);
      // const token = await AsyncStorage.getItem('token');
      navigation.replace('Main-Tabs');
      // console.log(response.data.result.userInfo);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutAction = navigation => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: '',
  });
  navigation.replace('Auth');
};
