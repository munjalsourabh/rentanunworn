import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAlert: false,
    payload: ''
};

export const alertSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        showAlert: (state,  {payload}) => {
            state.showAlert = true;
            state.payload = payload
        },
        hideAlert (state) {
            state.showAlert = false;
            state.payload = '';
        }
    }
})

export const {showAlert, hideAlert} = alertSlice.actions;

export default alertSlice.reducer;
