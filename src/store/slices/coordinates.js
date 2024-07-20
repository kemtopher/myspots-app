import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // current: [-96.797, 32.7767]
  current: [-84.4209138, 33.7312114]
};

export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    }
  }
});

export const { setCurrent } = coordinatesSlice.actions;
export default coordinatesSlice.reducer;
