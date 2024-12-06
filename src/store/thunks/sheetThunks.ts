import { createAsyncThunk } from "@reduxjs/toolkit";
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

export { actionGetSheets };
