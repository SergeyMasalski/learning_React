import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReviews = createAsyncThunk<any, string>('review/getReviews', async restaurantId => {
  const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
  return response.json();
});
