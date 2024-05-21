import { createAction, createReducer } from '@reduxjs/toolkit';

export interface UserState {
  id: number;
  lastname: string;
  firstname: string;
  userCredential: {
    email: string;
    password: string;
  };
  image: string;
  isLogged: boolean;
}

export const initialState: UserState = {
  id: 0,
  lastname: '',
  firstname: '',
  userCredential: {
    email: '',
    password: '',
  },
  image: '',
  isLogged: false,
};

export const actionChangeCredential = createAction<{
  credentialName: 'email' | 'password';
  newValue: string;
}>('user/CHANGE_CREDENTIAL');
export const actionClearUser = createAction('CLEAR_USER');

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionChangeCredential, (state, action) => {
    // -- action générique pour les inputs controllés du bloc Settings --
    // changer l'email OU le password
    state.userCredential[action.payload.credentialName] =
      action.payload.newValue;
  });
});

export default userReducer;
