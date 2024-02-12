import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';
import Interfaces from '../../../constants/interfaces';

export const dishesSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: normalizedDishes.reduce((acc: { [key: string]: Interfaces.DishNorm }, dish: Interfaces.DishNorm) => {
      acc[dish.id] = dish;
      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
  reducers: {},
});
