import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAuth: false
};

export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        showAuth: (state) => {
            state.showAuth = true;
        },
        hideAuth (state) {
            state.showAuth = false;
        }
    }
})

export const {showAuth, hideAuth} = authSlice.actions;

export default authSlice.reducer;
