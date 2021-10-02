import {ToastAndroid} from 'react-native';
import {
  createVehicle,
  getVehicleBikes,
  getVehicleCars,
  getVehicleMotorbikes,
  getVehicles,
} from '../../utils/Vehicle';
import {
  ADD_VEHICLES,
  GET_BIKES,
  GET_CARS,
  GET_MOTORBIKES,
  GET_VEHICLES,
} from '../reducer/actionString';

export const vehicleAction = body => {
  return async dispatch => {
    try {
      const response = await getVehicles(body);
      dispatch({
        type: GET_VEHICLES,
        payload: response.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCars = () => {
  return async dispatch => {
    try {
      const response = await getVehicleCars();
      dispatch({
        type: GET_CARS,
        payload: response.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMotorbikes = () => {
  return async dispatch => {
    try {
      const response = await getVehicleMotorbikes();
      dispatch({
        type: GET_MOTORBIKES,
        payload: response.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBikes = () => {
  return async dispatch => {
    try {
      const response = await getVehicleBikes();
      dispatch({
        type: GET_BIKES,
        payload: response.data.result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addVehicles = (data, props) => {
  return async dispatch => {
    try {
      const response = await createVehicle(data);
      dispatch({
        type: ADD_VEHICLES,
        action: response.data.result,
      });
      props.navigation.navigate('Home');
      return ToastAndroid.show('Add vehicle success!', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };
};
