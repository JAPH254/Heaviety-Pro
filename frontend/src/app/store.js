import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

import { registerUser } from "../features/register/registerApi"
import authReducer from "../pages/loginSlice"
 // Ensure the correct import

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: [registerUser.reducerPath], // This should match exactly the reducer path name
};

// Combine reducers
const rootReducer = combineReducers({
  
  auth: authReducer,
  [registerUser.reducerPath]: registerUser.reducer,
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
    }).concat(registerUser.middleware),
});

// Create persistor
export const persistedStore = persistStore(store);

// Set up listeners for RTK Query
setupListeners(store.dispatch);
