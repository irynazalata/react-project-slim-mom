import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
import userDataDiet from './dailyRate/dailyRateReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REHYDRATE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import productsReducer from './products/productAdd/productAddReducer';
import dateReducer from './calendar/calendarReducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: persistReducer(persistConfig, authReducer),
    dailyRate: userDataDiet,
    date: dateReducer
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);

