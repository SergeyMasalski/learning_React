import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../constants/normalized-mock';
import Interfaces from '../../../constants/interfaces';

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    entities: normalizedUsers.reduce((acc: { [key: string]: Interfaces.UserNorm }, user: Interfaces.UserNorm) => {
      acc[user.id] = user;
      return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
  },
  reducers: {},
});
