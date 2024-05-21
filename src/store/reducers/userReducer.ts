import { createAction, createReducer } from '@reduxjs/toolkit';

export interface UserState {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  image: string;
  isLogged: boolean;
}

export const initialState: UserState = {
  id: 0,
  lastname: '',
  firstname: '',
  email: '',
  password: '',
  image: '',
  isLogged: false,
};

export const actionChangeMail = createAction<{
  name: 'email';
  newValue: string;
}>('user/CHANGE_MAIL');

export const actionChangePassword = createAction<{
  name: 'password';
  newValue: string;
}>('user/CHANGE_PASSWORD');

export const actionClearUser = createAction('CLEAR_USER');

export const actionIsLogged = createAction<{
  isLogged: boolean;
  id: number;
  lastname: string;
  firstname: string;
  image: string;
  email: string;
  password: string;
}>('IS_LOGGED');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeMail, (state, action) => {
      state.email = action.payload.newValue;
    })
    .addCase(actionChangePassword, (state, action) => {
      state.password = action.payload.newValue;
    })

    .addCase(actionIsLogged, (state, action) => {
      if (state.isLogged === true) {
        state.id = action.payload.id;
        state.lastname = action.payload.lastname;
        state.firstname = action.payload.firstname;
        state.image = action.payload.image;
      }
    });
});
export default userReducer;
