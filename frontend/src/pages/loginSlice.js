// src/pages/loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk for login
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        // Make a POST request to the login API
        const response = await axios.post('http://localhost:8080/api/login', credentials, {
            headers: {
                'Content-Type': 'application/json', // Ensure correct content type
            },
        });
        return response.data; // Assuming the API returns user data or token on success
    } catch (error) {
        // Return a rejected value if login fails
        return rejectWithValue(error.response ? error.response.data : 'Login failed');
    }
});

// Define the initial state for authentication
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
        user: null, // This will store user data or token
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new request
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Store the user data or token on successful login
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed'; // Handle error on login failure
            });
    },
});

export default authSlice.reducer;
