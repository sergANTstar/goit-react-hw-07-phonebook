import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './contactsAPI';
import { authSlice } from './authUser/authUserReducer';
import { configureStore } from '@reduxjs/toolkit';

const authPersistConfig = {
  key: 'authUser',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    authUser: persistReducer(authPersistConfig, authSlice.reducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware);
  },
});

export const persistor = persistStore(store);