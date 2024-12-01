
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './baseUrl';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
     baseUrl: `${BASE_URL}`
     }),
  endpoints: (builder) => ({
    fetchUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useFetchUserByIdQuery } = userApi;

export default userApi;
