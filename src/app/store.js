import { configureStore } from '@reduxjs/toolkit';
import middleMenuReducer from '../features/middleMenu/middleMenuSlice';
import middleMenuOpenOptionsReducer from '../features/middleMenu/middleMenuOpenOptionsSlice';

export const store = configureStore({
  reducer: {
    middleMenu: middleMenuReducer,
    middleMenuOpenOptions: middleMenuOpenOptionsReducer,
  },
});
