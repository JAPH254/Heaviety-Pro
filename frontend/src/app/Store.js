import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import userApi from "../pages/profile/UserApi";
import authReducer from "../pages/loginSlice";
import registerApi from "../pages/registerApi";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [], // Add reducers you want to persist here, if any
};

const rootReducer = combineReducers({
    auth: authReducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [userApi.reducerPath]: userApi.reducer, // Include userApi reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }).concat(registerApi.middleware, userApi.middleware),
});

export const persistedStore = persistStore(store);

setupListeners(store.dispatch);
