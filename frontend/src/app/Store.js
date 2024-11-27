import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {setupListeners} from "@reduxjs/toolkit/query";

import authReducer from "../pages/loginSlice"
import userProfileReducer from '../pages/userProfileSlice'; 
import registerApi from "../pages/registerApi";

const persistConfig ={
    key:'root',
    storage,
    whitelist:[],
};
const rootReducer = combineReducers({
    auth:authReducer,
    auth:userProfileReducer,
    [registerApi.reducerPath]:registerApi.reducer  
});
const persistedReducer  = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:['persist/PERSIST'],
            }
        }).concat(registerApi.middleware),
});
export const persistedStore = persistStore(store);

setupListeners(store.dispatch);