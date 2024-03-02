import { State } from '../..';

export const selectRestaurantModule = (state: State) => state.restaurant;

export const selectRestaurantIds = (state: State) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state: State, id: string) => selectRestaurantModule(state).entities[id];
