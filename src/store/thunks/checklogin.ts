import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import axiosInstance, { addTokenJwtToAxiosInstance } from '../../axios/axios';
import { addTokenToLocalStorage } from '../../localStorage/localStorage';

const actionCheckLogin = createAsyncThunk(
  'user/CHECK_LOGIN',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post('/login', {
      email: state.user.email,
      password: state.user.password,
    });
    const { token } = response.data;
    addTokenJwtToAxiosInstance(token);
    addTokenToLocalStorage(token);
    return { token };
  }
);

export default actionCheckLogin;
