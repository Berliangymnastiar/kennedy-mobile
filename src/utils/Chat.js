import axios from 'axios';
import {API_URL} from '@env';

export const postChat = (body, token) => {
  return axios.post(`${API_URL}/chats`, body, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
export const getChat = (params, token) => {
  return axios.get(`${API_URL}/chats`, {
    params,
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
export const getLatestChat = (id, token) => {
  return axios.get(`${API_URL}/chats/latest/${id}`, {
    headers: {'x-access-token': `Bearer ${token}`},
  });
};
