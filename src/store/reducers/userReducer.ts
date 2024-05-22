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
  builder.addCase(actionIsLogged, (state, action) => {
    console.log('je suis l action :', action.payload);
    console.log('je suis le state :', state);
    console.log('test');

    if (action.payload && action.payload.email) {
      state.isLogged = true;
      state.id = action.payload.id;
      state.lastname = action.payload.lastname;
      state.firstname = action.payload.firstname;
      state.email = action.payload.email;
      state.image = action.payload.image;
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    }
  });
});
export default userReducer;

