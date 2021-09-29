import {
  GET_VEHICLES,
  GET_CARS,
  GET_MOTORBIKES,
  GET_BIKES,
} from './actionString';

const initialState = {
  vehicleData: [],
  cars: [],
  motorbikes: [],
  bikes: [],
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VEHICLES:
      return {
        ...state,
        vehicleData: action.payload,
      };
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    case GET_MOTORBIKES:
      return {
        ...state,
        motorbikes: action.payload,
      };
    case GET_BIKES:
      return {
        ...state,
        bikes: action.payload,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
