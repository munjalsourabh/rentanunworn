import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import alertReducer from "../features/alert/alertSlice";
import { authApi } from "../features/apiSlice";
import authApiReducer from "../features/apiSlice";




export const store = configureStore({
    reducer: {
        authentication: authReducer,
        alert: alertReducer,
        authApi: authApiReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),

}) 


