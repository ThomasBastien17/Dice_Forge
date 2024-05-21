import { createAction, createReducer } from '@reduxjs/toolkit';
import actionCheckLogin from '../thunks/checklogin';

export interface UserState {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  image: string;
  isLogged: boolean;
  token: null | string;
  error: null | string;
}

export const initialState: UserState = {
  id: 0,
  lastname: '',
  firstname: '',
  email: '',
  password: '',
  image: '',
  isLogged: false,
  token: null,
  error: null,
};

export const actionChangeMail = createAction<{
  name: 'email';
  newValue: string;
}>('user/CHANGE_MAIL');

export const actionChangePassword = createAction<{
  name: 'password';
  newValue: string;
}>('user/CHANGE_PASSWORD');

export const actionLogOut = createAction('user/LOGOUT');

export const actionClearUser = createAction('CLEAR_USER');

export const actionLogIn = createAction<{ jwt: string }>('user/LOGIN');

// ----- REDUCER ------
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeMail, (state, action) => {
      state.email = action.payload.newValue;
    })
    .addCase(actionChangePassword, (state, action) => {
      state.password = action.payload.newValue;
    })
    .addCase(actionCheckLogin.fulfilled, (state, action) => {
      state.isLogged = true;
      state.token = action.payload.token;
    })
    .addCase(actionCheckLogin.rejected, (state) => {
      state.error = 'erreur de connexion';
    })
    .addCase(actionLogIn, (state, action) => {
      state.isLogged = true;
      state.token = action.payload.jwt;
    })
    .addCase(actionLogOut, (state) => {
      state.isLogged = false;
    });
});
export default userReducer;
