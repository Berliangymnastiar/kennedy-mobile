import axios from 'axios';
import {API_URL} from '@env';
// import {useSelector} from 'react-redux';
// const token = useSelector(state => state.auth.token);

export const getVehicles = query => {
  const body = {};
  return axios.get(`${API_URL}/vehicles${query}`, body);
};

export const getVehicleCars = () => {
  return axios.get(`${API_URL}/vehicles?filter=cars`);
};

export const getVehicleMotorbikes = () => {
  return axios.get(`${API_URL}/vehicles?filter=motorbike`);
};

export const getVehicleBikes = () => {
  return axios.get(`${API_URL}/vehicles?filter=bikes`);
};

export const createVehicle = data => {
  return axios.post(`${API_URL}/vehicles`, data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};
