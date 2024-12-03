import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './baseUrl';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, // Set base URL here
    prepareHeaders: (headers) => {
      // Replace 'YOUR_AUTH_TOKEN' with the actual token value
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMTczMDA4LCJpYXQiOjE3MzMxNjU4MDgsImp0aSI6ImVhMzI3ZGU3OTVkODRkYzg4ODA2MjI4ODZlNmNjMDhmIiwidXNlcl9pZCI6M30.yfepm8Na3JknvoyiUWYxEZiTnDzWUiKW5BRDFI8pqfs';

      // Add the token to the Authorization header
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchUserById: builder.query({
      query: () => `auth/users/me`, // Endpoint defined here
    }),
  }),
});

export const { useFetchUserByIdQuery } = userApi;

export default userApi;
