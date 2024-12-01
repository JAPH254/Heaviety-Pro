import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../baseUrl'; // Import the base URL

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/`, // Use the imported base URL
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        url: 'login/',
        method: 'POST',
        body: user,
      }),
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: 'users/',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = registerApi;

export default registerApi;