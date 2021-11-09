import axios from 'axios';
import {API_URL} from '@env';

export const postRegister = body => {
  return axios.post(`${API_URL}/auth/register`, body);
};

export const postLogin = body => {
  return axios.post(`${API_URL}/auth/login`, body);
};
