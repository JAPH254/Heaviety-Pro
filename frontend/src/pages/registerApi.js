import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API slice
export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/auth/",
  }),
  endpoints: (builder) => ({
    // Login user mutation
    loginUser: builder.mutation({
      query: (user) => ({
        url: "login/",
        method: "POST",
        body: user,
      }),
    }),

    // Register user mutation
    registerUser: builder.mutation({
      query: (user) => ({
        url: "users/",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

// Export the hooks for the mutations
export const { useLoginUserMutation, useRegisterUserMutation } = registerApi;

export default registerApi;
