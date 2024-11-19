import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { registerApi } from "../pages/registerApi";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["registerApi"], // Only persist specific reducers if needed
};

// Combine reducers into a single root reducer
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
