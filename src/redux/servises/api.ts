import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Interfaces from '../../constants/interfaces';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Reviews', 'Restaurant'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (build) => ({
    getRestaurants: build.query<Interfaces.Restaurant[], void>({
      query: () => ({
        url: 'restaurants',
        method: 'GET',
      }),
    }),

    getRestaurantById: build.query<Interfaces.Restaurant[], string>({
      query: (restaurantId) => ({
        url: `restaurants`,
        method: 'GET',
        params: { restaurantId },
      }),
    }),

    getDishById: build.query<Interfaces.Dish, string>({
      query: (dishId) => ({
        url: `dish/${dishId}`,
        method: 'GET',
      }),
    }),

    getDishByRestaurantId: build.query<Interfaces.Dish[], string>({
      query: (restaurantId) => ({
        url: `dishes`,
        params: { restaurantId },
        method: 'GET',
      }),
    }),

    getReviewByRestaurantId: build.query<Interfaces.Review[], string>({
      query: (restaurantId) => ({
        url: `reviews`,
        params: { restaurantId },
        method: 'GET',
      }),
      providesTags: (result, _, restaurantId) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Reviews' as const, id })), { type: 'Reviews' as const, id: 'All' }, { type: 'Restaurant' as const, id: restaurantId }]
          : [{ type: 'Reviews' as const, id: 'All' }],
    }),

    getUsers: build.query<Interfaces.User[], void>({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
    }),

    createReview: build.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: 'POST',
        body: newReview,
      }),
      invalidatesTags: (__, _, { restaurantId }) => [
        {
          type: 'Restaurant',
          id: restaurantId,
        },
      ],
    }),

    editReview: build.mutation({
      query: ({ reviewId, editReview }) => ({
        url: `review/${reviewId}`,
        method: 'PATCH',
        body: editReview,
      }),
      invalidatesTags: (__, _, { reviewId }) => [
        {
          type: 'Reviews',
          id: reviewId,
        },
      ],
    }),
  }),
});

export const {
  useGetDishByIdQuery,
  useGetDishByRestaurantIdQuery,
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetReviewByRestaurantIdQuery,
  useGetUsersQuery,
  useCreateReviewMutation,
  useEditReviewMutation,
} = api;
