import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import Interfaces from '../../../constants/interfaces';
import { getReviews } from './thunks/get-reviews';

export interface ReviewState {
  entities: { [key: string]: Interfaces.ReviewNorm };
  ids: string[];
}

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState() as ReviewState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});
