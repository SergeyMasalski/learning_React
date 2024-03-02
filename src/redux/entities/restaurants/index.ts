import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import Interfaces from '../../../constants/interfaces';
import { getRestaurants } from './thunks/get-restaurants';

export interface RestaurantState {
  entities: { [key: string]: Interfaces.RestaurantsNorm };
  ids: string[];
}

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState() as RestaurantState,
  reducers: {},
  extraReducers: bulder =>
    bulder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});
