import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock';
import Interfaces from '../../../constants/interfaces';

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities: normalizedRestaurants.reduce((acc: { [keys: string]: Interfaces.RestaurantsNorm }, restaurant: Interfaces.RestaurantsNorm) => {
      acc[restaurant.id] = restaurant;
      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
  reducers: {},
});
