import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for login
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/jwt/create/', credentials, {
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.data && response.data.access && response.data.refresh){
            return response.data;
        }else{
            throw new Error("Invalid response format");   
        } 
    } catch (error) {
        return rejectWithValue(error.response && error.response?.data || 'Login failed');
    }
    
});
// Initial state
const initialState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    access: null,
    refresh: null,
};

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.loading = false;
            state.error = null;
            state.isAuthenticated = false;
            state.access = null;
            state.refresh = null;
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.access = action.payload.access;
                state.refresh = action.payload.refresh;

                // Store tokens in localStorage
                localStorage.setItem('access', action.payload.access);
                localStorage.setItem('refresh', action.payload.refresh);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
                state.isAuthenticated = false;
            });
    },
});

// Export logout action
export const { logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
