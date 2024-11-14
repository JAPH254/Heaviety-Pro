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
    initialState:{
        user: null,
        error: null,
        isLoading: false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending, (state,action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state,action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    },
});

export default authSlice.reducer;

