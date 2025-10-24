import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    location: {
      latitude: null,
      longitude: null,
    },
  },
  reducers: {
    setLocation: (state, action) => {
      const { lat, long } = action.payload;
      (state.location.latitude = lat), (state.location.longitude = long);
    },
  },
});

export const {setLocation} = userSlice.actions;

export default userSlice.reducer;