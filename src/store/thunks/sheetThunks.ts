import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from '..';
import axiosInstance from "../../axios/axios";

const actionGetSheets = createAsyncThunk(
  'sheet/GET_SHEETS',
  async () => {
    
    const response = await axiosInstance.get(
      '/binder'
    );
    console.log("Je suis la réponse du thunk d'all sheets ",response.data);
    return(response.data);
  }
  
);

const actionGetSheetByGameId = createAsyncThunk(
  'sheet/GET_SHEET_BY_GAME_ID',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    let gameId = state.sheet.currentSheet.game_id;

    const response = await axiosInstance.get(
      `/binder/${gameId}`
    );
    
    return(response.data);
  }
);

const actionGetSheetById = createAsyncThunk(
  'sheet/GET_SHEET_BY_ID',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    let sheetId = state.sheet.currentSheet.id;
    
    if(sheetId === 0){
      sheetId = state.sheet.sheetId;
    }
  const response = await axiosInstance.get(
    `/sheet/${sheetId}`
  );
  const sheetSearched = response.data;
  console.log(sheetSearched);
  return sheetSearched;
  }
);

export { actionGetSheets, actionGetSheetById, actionGetSheetByGameId };
