import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cxnShown: false
    },
    reducers: {
        showWallet: (state, action) => {
            state.cxnShown = true
        },
        hideWallet: (state, action) => {
            state.cxnShown = false
        }
    }})

// this is for dispatch
export const { showWallet, hideWallet } = uiSlice.actions;

// this is for configureStore
export default uiSlice.reducer;
