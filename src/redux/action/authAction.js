import {CHANGE_LOADING, ERROR, LOGIN, LOGOUT} from '../reducer/actionString';
import {postLogin} from '../../utils/Auth';

export const loginAction = body => async dispatch => {
  dispatch({type: CHANGE_LOADING, payload: true});
  try {
    const response = await postLogin(body);
    dispatch({
      type: LOGIN,
      payload: response.data.result,
    });
    dispatch({type: CHANGE_LOADING, payload: false});
  } catch (error) {
    console.log(error.message);
    dispatch({type: CHANGE_LOADING, payload: false});
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const logoutAction = navigation => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: '',
  });
  navigation.replace('Auth');
};
