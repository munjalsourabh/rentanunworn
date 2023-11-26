import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://16.16.26.125:8080'}), 
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({firstName, lastName, email, password}) => ({
                url: '/auth/signup',
                method : 'POST',
                body: {
                    firstName,
                    lastName,
                    email,
                    password,
                }

            })
        }),
        login: builder.mutation({
            query: ({email, password}) => ({
                url: '/auth/login',
                method : 'POST',
                body: {
                    email,
                    password,
                }
            }),
        }),
        getUser: builder.mutation({
            query: () => ({
                url: '/user/me',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        }),
        getProducts: builder.mutation({
            query: () => ({
                url: '/product',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        })
    })
})


export const {useSignUpMutation, useLoginMutation, useGetUserMutation, useGetProductsMutation} = authApi;

export default authApi.reducer;