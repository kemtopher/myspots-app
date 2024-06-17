import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: 0
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state) => {
            state.events += 1
        },
    }
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;