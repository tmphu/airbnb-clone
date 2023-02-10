import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationInfo: null,
};

const locationReducer = createSlice({
  name: "locationReducer",
  initialState,
  reducers: {
    setLocationInfo: (state, action) => {
      // trả state về action.payload
      state.locationInfo = action.payload;
    },
  },
});

// các action được tạo ra cho từng case của reducer
export const { setLocationInfo } = locationReducer.actions;

export default locationReducer.reducer;
