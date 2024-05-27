import { createAction, createReducer } from '@reduxjs/toolkit';

export interface UserState {
  id: number;
  lastname: string;
  firstname: string;
  image: string;
  isLogged: boolean;
}

export const initialState: UserState = {
  id: 0,
  lastname: '',
  firstname: '',
  image: '',
  isLogged: false,
};

export const actionClearUser = createAction('CLEAR_USER');

export const actionIsLogged = createAction<{
  isLogged: boolean;
  id: number;
  lastname: string;
  firstname: string;
  image: string;
}>('IS_LOGGED');

export const actionSetUserToken = createAction<{
  jwt: string | null;
}>('GET_USER_TOKEN');

export const actionUserLogOut = createAction('USER_LOGOUT');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionIsLogged, (state, action) => {
      console.log('je suis l action :', action.payload);
      console.log('je suis le state reducer :', state);

      if (action.payload) {
        state.isLogged = true;
        state.id = action.payload.id;
        state.lastname = action.payload.lastname;
        state.firstname = action.payload.firstname;
        state.image = action.payload.image;
        sessionStorage.setItem('user', JSON.stringify(action.payload));
      }
    })
    .addCase(actionUserLogOut, (state) => {
      state.isLogged = false;
      state.id = 0;
      state.lastname = '';
      state.firstname = '';
      state.image = '';
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
    });
});
export default userReducer;
