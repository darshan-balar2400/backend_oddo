import { combineReducers } from "redux";
import user from "./slices/user";
import products from "./slices/products";
import alertdialog from "./slices/alertdialog";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    userReducer: user,
    productsReducer: products,
    alertdialogReducer: alertdialog,
});

export const store = configureStore({
    reducer: reducer,
});