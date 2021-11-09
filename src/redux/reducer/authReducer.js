import {CHANGE_LOADING, ERROR, LOGIN, LOGOUT} from './actionString';

const initialState = {
  token: null,
  userInfo: [],
  isLoading: false,
  error: '',
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userInfo: action.payload.userInfo,
        isLogin: true,
        error: '',
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CHANGE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        userInfo: [],
        error: '',
        isLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
