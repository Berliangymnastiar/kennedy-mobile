import {LOGIN, LOGOUT} from './actionString';

const initialState = {
  token: null,
  userInfo: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userInfo: action.payload.userInfo,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
