import { configureStore } from '@reduxjs/toolkit';
import middlemenuReducer from '../features/car/middleMenuSlice';

export const store = configureStore({
  reducer: {
    middleMenu: middlemenuReducer,
  },
});
