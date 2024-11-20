// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Using default localStorage for web
import loginReducer from '../pages/loginSlice.js';

// Define persist configuration
const persistConfig = {
    key: 'auth',
    storage, // This uses localStorage to persist the state
};

// Persist the loginReducer (auth state)
const persistedLoginReducer = persistReducer(persistConfig, loginReducer);

const store = configureStore({
    reducer: {
        auth: persistedLoginReducer, // Use persisted reducer for authentication
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

const persistedStore = persistStore(store);
export { store, persistedStore };

// Set up listeners for RTK Query
setupListeners(store.dispatch);

