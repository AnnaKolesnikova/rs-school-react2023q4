import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';

export const store = configureStore({
  reducer: {
    searchWord: searchReducer,
  },
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
