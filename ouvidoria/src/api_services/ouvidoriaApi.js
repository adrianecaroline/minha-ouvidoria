require('dotenv').config();
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4200',
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' }
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if(token) {
    config.headers = {
      ...config.headers,
      "x-access-token": token
    }
  }
  return config
});

axiosInstance.interceptors.response.use((response) => {
  return response
});

export default axiosInstance;