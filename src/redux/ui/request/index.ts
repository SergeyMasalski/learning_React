import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import REQUEST_STATUS from './constants';

export interface RequestState {
  [requestId: string]: string;
}

interface ActionRequest {
  meta: RequestState;
}

export const requestSlice = createSlice({
  name: 'request',
  initialState: {} as RequestState,
  reducers: {},
  selectors: {
    selectIsLoading: (state, requestId: string) => state[requestId] === REQUEST_STATUS.pending,
  },
  extraReducers: builder =>
    builder
      .addMatcher(
        ({ type }: PayloadAction<unknown>) => type.endsWith('/pending'),
        (state, { meta }: ActionRequest) => {
          state[meta.requestId] = REQUEST_STATUS.pending;
        }
      )
      .addMatcher(
        ({ type }: PayloadAction<unknown>) => type.endsWith('/fulfilled'),
        (state, { meta }: ActionRequest) => {
          state[meta.requestId] = REQUEST_STATUS.success;
        }
      )
      .addMatcher(
        ({ type }: PayloadAction<unknown>) => type.endsWith('/rejected'),
        (state, { meta }: ActionRequest) => {
          state[meta.requestId] = REQUEST_STATUS.fail;
        }
      ),
});

export const { selectIsLoading } = requestSlice.selectors;
