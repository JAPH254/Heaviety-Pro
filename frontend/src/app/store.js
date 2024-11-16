import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {setupListeners} from "@reduxjs/toolkit/query";

import authReducer from "../pages/loginSlice"

const persistConfig ={
    key:'root',
    storage,
    whitelist:[],
};
const rootReducer = combineReducers({
    auth:authReducer
    
});
const persistedReducer  = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:['persist/PERSIST'],
            }
        }).concat(),
});
export const persistedStore = persistStore(store);

setupListeners(store.dispatch);
