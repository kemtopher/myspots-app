import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/events';
import coordinatesReducer from './slices/coordinates';
import searchLocationReducer from './slices/search-location';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    coordinates: coordinatesReducer,
    searchLocation: searchLocationReducer
  }
});
