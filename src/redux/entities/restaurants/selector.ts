export const selectRestaurantModule = (state: any) => state.restaurant;

export const selectRestaurantIds = (state: any) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state: any, id: string) => selectRestaurantModule(state).entities[id];
