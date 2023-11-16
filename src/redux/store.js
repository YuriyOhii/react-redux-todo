import { authReducer } from './auth/authSlice';
import { filtersReducer } from './filter/filtersSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedTokenAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filtersReducer,
    auth: persistedTokenAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
