import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slices/events";
import coordinatesReducer from './slices/coordinates';

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        coordinates: coordinatesReducer        
    }
})