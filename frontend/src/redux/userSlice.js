import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    location: {
      latitude: null,
      longitude: null,
    },
    districtData: null,
    loading:true
  },
  reducers: {
    setLocation: (state, action) => {
      const { lat, long } = action.payload;
      (state.location.latitude = lat), (state.location.longitude = long);
    },
    setDistrictData: (state, action) => {
      state.districtData = action.payload;
      state.loading = false;
    },
  },
});

export const { setLocation, setDistrictData } = userSlice.actions;

export default userSlice.reducer;
