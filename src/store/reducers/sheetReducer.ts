import { createAction, createReducer } from '@reduxjs/toolkit';
import { ISheet } from '../../@Types/sheet';
import { actionGetSheetById, actionGetSheets } from '../thunks/sheetThunks';

export interface SheetState {
  sheets: ISheet[];
  currentSheet: ISheet;
  sheetId: number;
  sheetData: {
    name: string;
    class: string;
    level: number;
  };
}

export const sheetInitialState: SheetState = {
  sheetData: {
    name: '',
    class: '',
    level: 0,
  },
  sheets: [],
  sheetId: 3,
  currentSheet: {
    class: '',
    created_at: '',
    game_id: null,
    id: 0,
    level: 0,
    name: '',
    updated_at: null,
  },
};

export const actionSetSheetName = createAction<string>('SET_SHEET_NAME');

export const actionSetSheetId = createAction<number>('SET_SHEET_ID');

export const actionSetCreateSheet = createAction<string>('SET_CREATE_SHEET');

const sheetReducer = createReducer(sheetInitialState, (builder) => {
  builder
    .addCase(actionSetSheetId, (state, action) => {
      state.sheetId = action.payload;
    })
    .addCase(actionGetSheets.fulfilled, (state, action) => {
      state.sheets = action.payload;
    })
    .addCase(actionGetSheetById.fulfilled, (state, action) => {
      state.currentSheet = action.payload;
    })
});

export default sheetReducer;
