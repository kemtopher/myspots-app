import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    current: { lon: '-96.7970', lat: '32.7767' },
}

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        }
    }
})

export const { setCurrent } = coordinatesSlice.actions;
export default coordinatesSlice.reducer;
