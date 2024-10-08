import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: {
    coords: [],
    name: "",
    address: "",
    description: "",
  }
};

export const searchLocationSlice = createSlice({
  name: 'searchLocation',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  }
});

export const { setLocation } = searchLocationSlice.actions;
export default searchLocationSlice.reducer;
