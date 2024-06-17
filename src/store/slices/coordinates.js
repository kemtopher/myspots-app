import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    coordinates: { lon: 0, lat: 0 }
}

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducer: {
        setCoordinates: (state, action) => {
            state.coordinates = action.payload
        }
    }
})

export const { setCoordinates } = coordinatesSlice.actions;
export default coordinatesSlice.reducer;
