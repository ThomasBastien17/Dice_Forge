import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dice-forge-4eec83d84796.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export function addTokenJwtToAxiosInstance(token: string) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function removeTokenJwtFromAxiosInstance() {
  delete axiosInstance.defaults.headers.common['Authorization'];
}

export default axiosInstance;
