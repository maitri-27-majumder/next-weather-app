import { configureStore } from '@reduxjs/toolkit';
import localityReducer from './localitySlice';
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    locality: localityReducer,
    weather: weatherReducer,
  },
});

export default store;