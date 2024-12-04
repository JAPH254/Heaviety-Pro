import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from '../baseUrl';

export const userApi = createApi({
 reducerPath: 'userApi',
 baseQuery: fetchBaseQuery({
   baseUrl: BASE_URL,
   prepareHeaders: (headers) => {
      const token = localStorage.getItem('access');
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
