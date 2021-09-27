import axios from 'axios';
const url = 'http://192.168.1.100:8000';

export const getVehicles = params => {
  return axios.get(url, {params: params});
};
