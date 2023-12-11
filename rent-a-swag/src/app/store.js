import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import alertReducer from "../features/alert/alertSlice";
import { authApi } from "../features/apiSlice";
import authApiReducer from "../features/apiSlice";
import locationReducer from "../features/location/locationSlice";
import filtersReducer from "../features/filters/filtersSlice";

export const store = configureStore({
    reducer: {
        authentication: authReducer,
        alert: alertReducer,
        authApi: authApiReducer,
        location: locationReducer,
        filters: filtersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),

})
