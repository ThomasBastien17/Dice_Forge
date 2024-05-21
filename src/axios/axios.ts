import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export function addTokenJwtToAxiosInstance(token: string) {
  // ajout des headers dans l'instance après création
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// fonction executée quand on se deconnecte -> il faut supprimer le token de l'instance
export function removeTokenJwtFromAxiosInstance() {
  // ajout des headers dans l'instance après création
  axiosInstance.defaults.headers.common.Authorization = '';
}

export default axiosInstance;
