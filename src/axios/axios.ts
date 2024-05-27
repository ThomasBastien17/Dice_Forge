import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://roje6147.odns.fr/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function addTokenJwtToAxiosInstance(token: string) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeTokenJwtFromAxiosInstance() {
  axiosInstance.defaults.headers.common.Authorization = '';
}

export default axiosInstance;
