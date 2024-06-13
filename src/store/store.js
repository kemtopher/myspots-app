import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slices/events";

export const store = configureStore({
    reducer: {
        events: eventsReducer
    }
})