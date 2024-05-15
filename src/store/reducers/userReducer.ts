import { createAction, createReducer } from '@reduxjs/toolkit';

export interface UserDataState {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const initialState: UserDataState = {
  lastname: '',
  firstname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const actionChangeUser = createAction<{
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  confirmPassword: string;
}>('CHANGE_USER');

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionChangeUser, (state, action) => {});
});

export default userReducer;
