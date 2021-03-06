import {ToastAndroid} from 'react-native';
import {
  createVehicle,
  getVehicleBikes,
  getVehicleCars,
  getVehicleMotorbikes,
  getVehicles,
  updateVehicle,
} from '../../utils/Vehicle';
import {
  ADD_VEHICLES,
  CHANGE_LOADING,
  GET_BIKES,
  GET_CARS,
  GET_MOTORBIKES,
  GET_VEHICLES,
  UPDATE_VEHICLE,
} from '../reducer/actionString';

export const vehicleAction = body => {
  return async dispatch => {
    dispatch({type: CHANGE_LOADING, payload: true});
    try {
      const response = await getVehicles(body);
      console.log(response.data);
      dispatch({
        type: GET_VEHICLES,
        payload: response.data,
      });
      dispatch({type: CHANGE_LOADING, payload: false});
    } catch (error) {
      console.log(error);
      dispatch({type: CHANGE_LOADING, payload: false});
    }
  };
};

export const getCars = () => {
  return async dispatch => {
    dispatch({type: CHANGE_LOADING, payload: true});
    try {
      const response = await getVehicleCars();
      dispatch({
        type: GET_CARS,
        payload: response.data.result,
      });
      dispatch({type: CHANGE_LOADING, payload: false});
    } catch (error) {
      console.log(error);
      dispatch({type: CHANGE_LOADING, payload: false});
    }
  };
};

export const getMotorbikes = () => {
  return async dispatch => {
    dispatch({type: CHANGE_LOADING, payload: true});
    try {
      const response = await getVehicleMotorbikes();
      dispatch({
        type: GET_MOTORBIKES,
        payload: response.data.result,
      });
      dispatch({type: CHANGE_LOADING, payload: false});
    } catch (error) {
      console.log(error);
      dispatch({type: CHANGE_LOADING, payload: false});
    }
  };
};

export const getBikes = () => {
  return async dispatch => {
    dispatch({type: CHANGE_LOADING, payload: true});
    try {
      const response = await getVehicleBikes();
      dispatch({
        type: GET_BIKES,
        payload: response.data.result,
      });
      dispatch({type: CHANGE_LOADING, payload: false});
    } catch (error) {
      console.log(error);
      dispatch({type: CHANGE_LOADING, payload: false});
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

export const editVehicle = (data, id) => {
  return async dispatch => {
    try {
      const response = await updateVehicle(data, id);
      dispatch({
        type: UPDATE_VEHICLE,
        action: response.data.result,
      });
      return ToastAndroid.show('Update vehicle success!', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };
};
