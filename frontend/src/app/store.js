import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

import { registerApi } from "../features/register/registerApi"; // Ensure the correct import

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["registerApi"], // Corrected to use an array
};

// Combine reducers
const rootReducer = combineReducers({
  [registerApi.reducerPath]: registerApi.reducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(registerApi.middleware),
});

// Create persistor
export const persistor = persistStore(store);

// Set up listeners for RTK Query
setupListeners(store.dispatch);
