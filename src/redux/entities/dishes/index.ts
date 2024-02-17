import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import Interfaces from '../../../constants/interfaces';
import { getDishes } from './thunk/get-dishes';

export interface DishState {
  entities: { [key: string]: Interfaces.DishNorm };
  ids: string[];
}

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState() as DishState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});
