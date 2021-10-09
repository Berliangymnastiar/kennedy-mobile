// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {CHANGE_LOADING, LOGIN, LOGOUT} from '../reducer/actionString';
import {API_URL} from '@env';

export const loginAction = (body, navigation) => async dispatch => {
  dispatch({type: CHANGE_LOADING, payload: true});
  try {
    const response = await axios.post(`${API_URL}/auth/login`, body);
    dispatch({
      type: LOGIN,
      payload: response.data.result,
    });
    dispatch({type: CHANGE_LOADING, payload: false});
    navigation.replace('Main-Tabs');
  } catch (error) {
    console.log(error.message);
    dispatch({type: CHANGE_LOADING, payload: false});
  }
};

export const logoutAction = navigation => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: '',
  });
  navigation.replace('Auth');
};
