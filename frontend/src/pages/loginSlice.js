import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const  login = createAsyncThunk('auth/login', async(credentials,{rejectWithValue})=>{
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', credentials,{
            headers:{
                'Content-Type':'application/json',
            }
        });
        return response.data;
    }catch(error){
        return rejectWithValue(error.response ? error.response.data: 'Login failed');
    }
});

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

