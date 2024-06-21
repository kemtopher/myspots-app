import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slices/events";
import coordinatesReducer from './slices/coordinates';
import locatorReducer from './slices/locator';

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        coordinates: coordinatesReducer,
        locator: locatorReducer
    }
})