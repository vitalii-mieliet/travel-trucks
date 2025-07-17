import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "@/redux/poducts/productsSlice";
import favoritesReducer from "@/redux/bookingForm/bookingFormSlice";
import bookingFormReducer from "@/redux/bookingForm/bookingFormSlice";

const persistConfig = {
  key: "CAMP_KEY",
  storage,
};
const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer,
  bookingForm: bookingFormReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
