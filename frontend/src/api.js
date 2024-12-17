import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/users/login`, { username, password });
  return response.data;
};

export const signupUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/users/register`, { username, password });
  return response.data;
};

export const fetchRooms = async (token) => {
  const response = await axios.get(`${API_URL}/rooms`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};