import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingReducer = createSlice({
  name: "loadingReducer",
  initialState,
  reducers: {
    setLoadingOn: (state, action) => {
      state.isLoading = true;
    },
    setLoadingOff: (state, action) => {
      state.isLoading = false;
    },
  },
});

// các action được tạo ra cho từng case của reducer
export const { setLoadingOn, setLoadingOff } = loadingReducer.actions;

export default loadingReducer.reducer;
