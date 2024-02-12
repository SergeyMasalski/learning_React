export const selectUserModule = (state: any) => state.user;

export const selectUserIds = (state: any) => selectUserModule(state).ids;

export const selectUserById = (state: any, id: string) => selectUserModule(state).entities[id];
