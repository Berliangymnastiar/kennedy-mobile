import {
  GET_VEHICLES,
  GET_CARS,
  GET_MOTORBIKES,
  GET_BIKES,
  ADD_VEHICLES,
  UPDATE_VEHICLE,
  CHANGE_LOADING,
} from './actionString';

const initialState = {
  isLoading: false,
  vehicleData: [],
  cars: [],
  motorbikes: [],
  bikes: [],
  message: '',
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
    case CHANGE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ADD_VEHICLES:
      return {
        ...state,
        message: action.payload,
      };
    case UPDATE_VEHICLE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default vehicleReducer;
