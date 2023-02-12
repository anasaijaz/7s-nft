import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cxnShown: false,
    loading: false,
  },
  reducers: {
    showWallet: (state, action) => {
      state.cxnShown = true;
    },
    hideWallet: (state, action) => {
      state.cxnShown = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

// this is for dispatch
export const { showWallet, hideWallet, startLoading, stopLoading } =
  uiSlice.actions;

// this is for configureStore
export default uiSlice.reducer;
