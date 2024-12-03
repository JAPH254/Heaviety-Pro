import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './baseUrl';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, 
    prepareHeaders: (headers) => {
    
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMjU1NzU3LCJpYXQiOjE3MzMyNDg1NTcsImp0aSI6IjljMzRlNjcwOGFhMTQ5NDhiNDc4MzVkYTc0OTM5NjhmIiwidXNlcl9pZCI6M30._eV16vMGMZtHG3rq-7u6UEcwc64_8bnx7jIvZCKUc5o';

      
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchUserById: builder.query({
      query: () => 'auth/users/me', 
    }),
  }),
});

export const { useFetchUserByIdQuery } = userApi;

export default userApi;
