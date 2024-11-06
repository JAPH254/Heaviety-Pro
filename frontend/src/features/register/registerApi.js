import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registerUser = createApi({
  reducerPath: 'registerUser', // This should match the key in `combineReducers`
  baseQuery: fetchBaseQuery({ baseUrl: 'YOUR_API_BASE_URL' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerUser;
