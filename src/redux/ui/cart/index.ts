import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartState {
  [productId: string]: number;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {} as CartState,
  reducers: {
    incrementDish: (state, { payload: productId }: PayloadAction<string>) => {
      state[productId] = (state[productId] || 0) + 1;
    },
    decrementDish: (state, { payload: productId }: PayloadAction<string>) => {
      state[productId] = (state[productId] || 0) - 1;

      if (state[productId] <= 0) delete state[productId];
    },
  },
  selectors: {
    selectDishAnountById(state, dishId: string) {
      return state[dishId] || 0;
    },
    selectDishAnount(state) {
      return Object.values(state).reduce((acc: number, amountDish: number) => acc + amountDish, 0) || 0;
    },
    selectCartDishIds(state) {
      return Object.keys(state);
    },
  },
});

export const { selectDishAnountById, selectDishAnount, selectCartDishIds } = cartSlice.selectors;
export const { decrementDish, incrementDish } = cartSlice.actions;
