import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        categories: [],
        occasssion: [],
        fit: [],
        clothSize: [],
        shoes: [],
        priceRange: [],
        availability: [],
        radius: [],
        location: {
            latitude: '',
            longitude: ''
        }
    } 
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addCategories: (state, {payload}) => {
            state.filters.categories = [...state.filters.categories, payload]
        },
        removeCategories: (state, {payload}) => {
            const filterIndex = state.filters.categories.indexOf(payload)
            console.log(filterIndex)
            state.filters.categories.splice(filterIndex, 1);
        },

        addOccasssion: (state, {payload}) => {
            state.filters.occasssion = [...state.filters.occasssion, payload];
        },
        removeOccassion: (state, {payload}) => {
            const filterIndex = state.filters.occasssion.indexOf(payload);
            state.filters.occasssion.splice(filterIndex, 1);
        },

        addFit: (state, {payload}) => {
            state.filters.fit = [...state.filters.fit, payload];
        },
        removeFit: (state, {payload}) => {
            const filterIndex = state.filters.fit.indexOf(payload);
            state.filters.fit.splice(filterIndex, 1);
        },

        addClothSize: (state, {payload}) => {
            state.filters.clothSize = [...state.filters.clothSize, payload];
        },
        removeClothSize: (state, {payload}) => {
            const filterIndex = state.filters.clothSize.indexOf(payload);
            state.filters.clothSize.splice(filterIndex, 1);
        },

        addShoesSize: (state, {payload}) => {
            state.filters.shoes = [...state.filters.shoes, payload];
        },
        removeShoesSize: (state, {payload}) => {
            const filterIndex = state.filters.shoes.indexOf(payload);
            state.filters.shoes.splice(filterIndex, 1);
        },

        addPriceRange: (state, {payload}) => {
            state.filters.priceRange = [...state.filters.priceRange, payload];
        },
        removePriceRange: (state, {payload}) => {
            const filterIndex = state.filters.priceRange.indexOf(payload);
            state.filters.priceRange.splice(filterIndex, 1);
        },

        addAvailability: (state, {payload}) => {
            state.filters.availability = [...state.filters.availability, payload];
        },
        removeAvailability: (state, {payload}) => {
            const filterIndex = state.filters.availability.indexOf(payload);
            state.filters.availability.splice(filterIndex, 1);
        },

        addRadius: (state, {payload}) => {
            state.filters.radius = [payload];
        },
        removeRadius: (state, {payload}) => {
            state.filters.radius = [];
        }
    }
})

export const {
    addCategories,
    removeCategories,
    addOccasssion,
    removeOccassion,
    addFit,
    removeFit,
    addShoesSize,
    addClothSize,
    addPriceRange,
    removePriceRange,
    addAvailability,
    removeAvailability,
    addRadius,
    removeRadius
} = filtersSlice.actions;

export default filtersSlice.reducer;
