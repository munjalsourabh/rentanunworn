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
        if (allFilters[el].length) {
            filtersToBeApplied[el] = allFilters[el];
        }
    });
    return filtersToBeApplied;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://16.171.253.128:8383'}), 
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
            query: ({form, itemDetails}) => ({
                url: '/lender',
                method: 'POST',
                params: itemDetails,
                body: form,
                formData: true,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            }),
        }),
        getLendings: builder.mutation({
            query: () => ({
                    url: '/lender',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
    
                }),
            }),
            
    })
})


export const {
    useSignUpMutation,
    useLoginMutation,
    useGetUserMutation,
    useGetProductsMutation,
    useGetRenterMutation,
    useUploadItemMutation,
    useGetLendingsMutation
} = authApi;

export default authApi.reducer;