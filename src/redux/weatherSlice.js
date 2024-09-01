import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: { currentWeather: null },
  reducers: {
    setWeather: (state, action) => {
      return { currentWeather: action.payload };
    },
  },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
