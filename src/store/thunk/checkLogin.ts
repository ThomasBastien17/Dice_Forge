// ici on ajoute "type" devant l'interface qu'on importe pour casser le cycle de dependance
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '..';
import axiosInstance, { addTokenJwtToAxiosInstance } from '../../axios/axios';
import { addTokenToLocalStorage } from '../../localStorage/localStorage';

const actionCheckLogin = createAsyncThunk(
  'user/CHECK_LOGIN',
  async (_, thunkAPI) => {
    // le fetch vers /login
    // on envoie l'email et le password qui sont dans le state
    // on les recupere en faisant un thunkAPI.getState, thunkAPI étant le second paramètre de notre middleware
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post('/login', {
      email: state.user.email, // value de l'input email
      password: state.user.password, // value de l'input password
    });
    const token = response.data;

    // on a reçu un token de l'API on va l'enregistrer dans les headers de l'instance axios comme ça on les aura pour toutes les prochaines requetes
    addTokenJwtToAxiosInstance(token);

    // on enregistre aussi le JWT dans le localStorage
    addTokenToLocalStorage(token);

    // on return les données qui seront ajoutées dans l'action fulfilled vers le reducer
    return token;
  }
);

export default actionCheckLogin;
