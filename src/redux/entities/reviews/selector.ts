export const selectReviewModule = (state: any) => state.review;

export const selectReviewIds = (state: any) => selectReviewModule(state).ids;

export const selectReviewById = (state: any, id: string) => selectReviewModule(state).entities[id];
