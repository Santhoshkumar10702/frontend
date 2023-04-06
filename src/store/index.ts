import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';

import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import useConfirmationReducer from './hooks/useConfirmationReducer';
import confirmation from './confirmation/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  confirmation,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export type AppReducerType = ReturnType<typeof persistedReducer>;

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

const persistor = persistStore(store);

export {useConfirmationReducer, store, persistor};
