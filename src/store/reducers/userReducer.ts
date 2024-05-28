import { createAction, createReducer } from '@reduxjs/toolkit';
import { removeTokenJwtFromAxiosInstance } from '../../axios/axios';

export interface UserState {
  userId: number;
  lastname: string;
  firstname: string;
  image: string;
  isLogged: boolean;
}

export const initialState: UserState = {
  userId: 0,
  lastname: '',
  firstname: '',
  image: '',
  isLogged: false,
};

export const actionIsLogged = createAction<{
  isLogged: boolean;
  userId: number;
  lastname: string;
  firstname: string;
  image: string;
}>('IS_LOGGED');

export const actionUserLogOut = createAction('USER_LOGOUT');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionIsLogged, (state, action) => {
      console.log('je suis l action :', action.payload);
      console.log('je suis le state reducer :', state);

      if (action.payload) {
        state.isLogged = true;
        state.userId = action.payload.userId;
        state.lastname = action.payload.lastname;
        state.firstname = action.payload.firstname;
        state.image = action.payload.image;
        sessionStorage.setItem('user', JSON.stringify(action.payload));
      }
    })
    .addCase(actionUserLogOut, (state) => {
      state.isLogged = false;
      state.userId = 0;
      state.lastname = '';
      state.firstname = '';
      state.image = '';
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
      removeTokenJwtFromAxiosInstance();
    });
});
export default userReducer;
