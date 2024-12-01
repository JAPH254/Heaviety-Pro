import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {setupListeners} from "@reduxjs/toolkit/query";

import authReducer from "../pages/loginSlice"
import registerApi from "../pages/registerApi";
import userApi from "../pages/userProfileApi";

const persistConfig ={
    key:'root',
    storage,
    whitelist:[],
};
const rootReducer = combineReducers({
    auth:authReducer,
    [registerApi.reducerPath]:registerApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    
});
const persistedReducer  = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:['persist/PERSIST'],
            }
        }).concat(registerApi.middleware, userApi.middleware),
});
export const persistedStore = persistStore(store);

setupListeners(store.dispatch);