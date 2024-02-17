import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constants/normalized-mock';
import Interfaces from '../../../constants/interfaces';

export const reviewsSlice = createSlice({
  name: 'review',
  initialState: {
    entities: normalizedReviews.reduce((acc: { [key: string]: Interfaces.ReviewNorm }, review: Interfaces.ReviewNorm) => {
      acc[review.id] = review;
      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
  reducers: {},
});
