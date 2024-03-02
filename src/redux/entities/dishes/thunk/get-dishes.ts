import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDishes = createAsyncThunk<any, string>('dish/getDishes', async restaurantId => {
  const response = await fetch(`http://localhost:3001/api/dishes?restaurantId==${restaurantId}`);

  return response.json();
});
