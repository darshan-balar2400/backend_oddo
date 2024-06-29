import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {
        ["uuid"]: {
            uuid: null,
            userId: null,
            productName: null,
            description: null,
            rentalPrice: null,
            available: null,
            images: null
        },
    },
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct(state, action) {
            return {
                ...state.products,
                [action.payload.uuid]: action.payload,
            };
        },
        removeProduct(state, action) {
            delete state.products[action.payload.uuid];
        },
        updateProduct(state, action) {
            state.products[action.payload.uuid] = {
                ...state.products[action.payload.uuid],
                ...action.payload
            };
        },
        clear(state) {
            state.products = {};
        }
    },
});

export const { addProduct, clear, removeProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;