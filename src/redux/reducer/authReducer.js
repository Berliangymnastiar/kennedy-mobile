import {CHANGE_LOADING, LOGIN, LOGOUT} from './actionString';

const initialState = {
  token: null,
  userInfo: [],
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userInfo: action.payload.userInfo,
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
      };
    default:
      return state;
  }
};

export default authReducer;
