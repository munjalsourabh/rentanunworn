import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAuth: false,
    isLoggedIn: false
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
        },
        loginSuccess(state) {
            state.isLoggedIn = true;
        },
        loginUnSuccessful(state) {
            state.isLoggedIn = false
        }
    }
})

export const {showAuth, hideAuth, loginSuccess, logoutSuccess, loginUnSuccessful} = authSlice.actions;

export default authSlice.reducer;
