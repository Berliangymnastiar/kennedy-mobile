import {GET_VEHICLES} from './actionString';

const initialState = {
  vehicleData: [],
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VEHICLES:
      return {
        ...state,
        vehicleData: action.payload,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
