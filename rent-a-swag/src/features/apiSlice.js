import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const APIFilterMapping = {
    categories: 'subCategories',
    occasssion: 'occasions',
    fit: 'fit',
    clothSize: 'size',
    // shoes: ''
    // priceRange: ''
    // availability: ''
    // radius: ''
}

const getParams = ({filters}) => {
    const allFilters = {...filters}
    const filtersToBeApplied = {}
    Object.keys(allFilters).forEach((el) => {
        if (el == 'categories' && allFilters[el].length) {
            filtersToBeApplied['subCategories'] = filters.categories.join(',')
        }
        if (el == 'occasssion' && allFilters[el].length) {
            filtersToBeApplied['occasions'] = filters.occasssion.join(',');
        }
    });
    return filtersToBeApplied;
}

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
            query: (filters) => ({
                url: '/product',
                method: 'GET',
                params: getParams(filters),
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }),
            // transformResponse: (results) => {
            //     // return results.splice(0, 5);
            //     // return results.sort(() => Math.random() - 0.5);
            // }
        }),
        getProduct: builder.mutation({
            query: (filters) => ({
                url: '/product',
                method: 'GET',
                params: getParams(filters),
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }),
            transformResponse: (results) => {
                // return results.splice(0, 5);
                // return results.sort(() => Math.random() - 0.5);
            }
        }),
        getRenter: builder.mutation({
            query: () => ({
                url: '/renter',
                method: 'GET',
                // params: getParams(),
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }),
        }),
        uploadItem: builder.mutation({
            query: (body) => ({
                url: '/lender',
                method: 'POST',
                params: {
                    "productName": "shoes",
                    "rrp": 2000,
                    "rentPrice": 20,
                    "brand": "adidas",
                    "occasion": "casual",
                    "category": "shoes",
                    "size": "8",
                    "fit": "normal",
                    "type": "shoes",
                    "gender": "men",
                    "latitude": 20.4,
                    "longitude": 30.7,
                    // "availableFrom": 2023-12-01,
                    "securityDeposit": 200.0
                },
                body,
                formData: true,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }

            }),
        }),
    })
})


export const {useSignUpMutation, useLoginMutation, useGetUserMutation, useGetProductsMutation, useGetRenterMutation, useUploadItemMutation} = authApi;

export default authApi.reducer;