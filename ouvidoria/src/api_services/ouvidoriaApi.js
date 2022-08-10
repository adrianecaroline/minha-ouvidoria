import axios from 'axios';
<<<<<<< HEAD
//require('dotenv').config();
=======
>>>>>>> 0314d9cdd161d99ab88e72993b156153cb68a188

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK,
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
