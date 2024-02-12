import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from './entities/restaurants';
import { dishesSlice } from './entities/dishes';
import { reviewsSlice } from './entities/reviews';
import { usersSlice } from './entities/users';

export const store = configureStore({
  reducer: combineSlices(restaurantSlice, dishesSlice, reviewsSlice, usersSlice),
});

console.log(store.getState());
