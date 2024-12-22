import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { RootState } from '..';
import axiosInstance, { addTokenJwtToAxiosInstance } from '../../axios/axios';
import { addRefreshTokenToLocalStorage } from '../../localStorage/localStorage';
import { addAccessTokenToSessionStorage } from '../../sessionStorage/sessionStorage';
import { IResponseData } from '../../@Types/response.data';
// import { addTokenAndPseudoToLocalStorage } from '../../localStorage/localStorage';

const actionCheckLogin = createAsyncThunk(
  'auth/CHECK_LOGIN',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post('/login', {
      email: state.auth.credentials.email,
      password: state.auth.credentials.password,
    });

    const { message, accessToken, refreshToken, user } = response.data;

    addTokenJwtToAxiosInstance(accessToken);
    addRefreshTokenToLocalStorage(refreshToken, user);
    addAccessTokenToSessionStorage(accessToken);

    return { user, message };
  }
);

const actionRegister = createAsyncThunk(
  'auth/REGISTER',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    try {
      const response = await axiosInstance.post('/signup', {
        lastname: state.auth.newUser.lastname,
        firstname: state.auth.newUser.firstname,
        email: state.auth.newUser.email,
        password: state.auth.newUser.password,
        confirmPassword: state.auth.newUser.confirmPassword,
      });

      const { message } = response.data;
      return { success: true, message }; // Retour en cas de succès
    } catch (error) {
      // Vérifier que l'erreur est une AxiosError
      if (axios.isAxiosError(error)) {
        // Assurer que error.response?.data est de type ErrorResponse
        const errorData = error.response?.data as IResponseData;
        const errorMessage =
          errorData?.message || 'Erreur lors de l’inscription';
        return { success: false, error: errorMessage }; // Retour en cas d'échec
      } else {
        // Si ce n'est pas une erreur Axios, gérer une erreur générique
        return { success: false, error: 'Erreur inconnue' };
      }
    }
  }
);

const actionRefreshToken = createAsyncThunk(
  'auth/REFRESH_TOKEN',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post('/refresh-token', {
      refreshToken: state.auth.refreshToken,
    });
    const accessToken = response.data.accessToken;

    return accessToken;
  }
);

const actionForgotPassword = createAsyncThunk(
  'auth/FORGOT_PASSWORD',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const response = await axiosInstance.post('/forgot-password', {
        email: state.auth.email,
      });
      const message = response.data.message;
      return message;
    } catch (error) {
      let errorMessage = 'An error occurred';
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const actionResetPassword = createAsyncThunk(
  'auth/RESET_PASSWORD',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post('/reset-password', {
      token: state.auth.resetPassword.token,
      id: state.auth.resetPassword.id,
      password: state.auth.resetPassword.password,
      confirmPassword: state.auth.resetPassword.confirmPassword,
    });
    console.log('je suis la reponse du reset password', response);
    return response.data;
  }
);

export {
  actionCheckLogin,
  actionForgotPassword,
  actionRefreshToken,
  actionRegister,
  actionResetPassword,
};
