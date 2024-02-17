import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { RestaurantState, restaurantSlice } from './entities/restaurants';
import { DishState, dishesSlice } from './entities/dishes';
import { ReviewState, reviewsSlice } from './entities/reviews';
import { UserState, usersSlice } from './entities/users';
import { CartState, cartSlice } from './ui/cart';
import { RequestState, requestSlice } from './ui/request';

export interface State {
  restaurant: RestaurantState;
  dish: DishState;
  review: ReviewState;
  user: UserState;
  cart: CartState;
  request: RequestState;
}

export const store = configureStore({
  reducer: combineSlices(restaurantSlice, dishesSlice, reviewsSlice, usersSlice, cartSlice, requestSlice),
});
