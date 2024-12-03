import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "../BaseUrl/baseUrl"; // Import the base URL

// Define the API slice
export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/`, // Use the imported base URL
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

