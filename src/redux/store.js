import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice'; // Ensure the correct path

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // Make sure this matches
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
