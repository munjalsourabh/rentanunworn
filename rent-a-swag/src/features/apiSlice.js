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
        })
    })
})


export const {useSignUpMutation, useLoginMutation} = authApi;

export default authApi.reducer;