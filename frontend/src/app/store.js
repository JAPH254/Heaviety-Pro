import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { registerApi } from "../pages/registerApi";
import { setupListeners } from "@reduxjs/toolkit/query";
// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["registerApi"], // Only persist specific reducers if needed
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
