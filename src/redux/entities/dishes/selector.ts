import { State } from '../..';

export const selectDishModule = (state: State) => state.dish;

export const selectDishIds = (state: State) => selectDishModule(state).ids;

export const selectDishById = (state: State, id: string) => selectDishModule(state).entities[id];
