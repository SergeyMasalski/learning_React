import { State } from '../..';

export const selectUserModule = (state: State) => state.user;

export const selectUserIds = (state: State) => selectUserModule(state).ids;

export const selectUserById = (state: State, id: string) => selectUserModule(state).entities[id];
