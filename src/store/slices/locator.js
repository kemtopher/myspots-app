import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coords: {
        latitude: 0.0,
	    longitude: 0.0,
    },
	radius: 5,
}

export const locatorSlice = createSlice({
    name: 'locator',
    initialState,
    reducers: {
        setRadius: (state, action) => {
            state.radius = action.payload
        },
        setCoords: (state, action) => {
            state.coords = action.payload
        }
    }
})

export const { setCoords, setRadius } = locatorSlice.actions;
export default locatorSlice.reducer;