import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from '../selector';
import { State } from '../../..';

interface Payload {
  getState: () => State;
}

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  async () => {
    const response = await fetch('http://localhost:3001/api/restaurants/');

    return response.json();
  },
  {
    condition: (_: void, { getState }: Payload) => !selectRestaurantIds(getState()).length,
  } as any
);
