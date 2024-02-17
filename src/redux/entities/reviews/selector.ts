import { State } from '../..';

export const selectReviewModule = (state: State) => state.review;

export const selectReviewIds = (state: State) => selectReviewModule(state).ids;

export const selectReviewById = (state: State, id: string) => selectReviewModule(state).entities[id];
