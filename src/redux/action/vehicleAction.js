import axios from 'axios';
import {getVehicles} from '../../utils/Vehicle';
import {GET_VEHICLES} from '../reducer/actionString';

export const vehicleAction = () => {
  try {
    return async dispatch => {
      const response = await axios.get('http://192.168.1.100:8000/vehicles');
      if (response.data.result) {
        dispatch({
          type: GET_VEHICLES,
          payload: response.data.result,
        });
      }
      console.log(response.data.result);
    };
  } catch (error) {
    console.log(error);
  }
};
