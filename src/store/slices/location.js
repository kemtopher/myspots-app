import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coordinates: []
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducer: {
        setCoordinates: (state) => state.coordinates
    }
})

export const {
    setCoordinates
} = locationSlice.actions;

export default locationSlice.reducer;
