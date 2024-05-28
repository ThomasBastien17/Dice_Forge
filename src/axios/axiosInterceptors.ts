import axiosInstance, { removeTokenJwtFromAxiosInstance } from './axios';

/**
 * The function `setupInterceptors` sets up response interceptors for handling 401
 * errors by removing the token and redirecting to the login page.
 * @param navigate - The `navigate` parameter is a function that takes a `patch`
 * (string) as an argument and is used to redirect the user to a different page or
 * route in the application. In the provided code snippet, it is used to navigate
 * the user to the '/login' page when a 401
 */
const setupInterceptors = (navigate: (patch: string) => void) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        sessionStorage.removeItem('token');
        removeTokenJwtFromAxiosInstance();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;
