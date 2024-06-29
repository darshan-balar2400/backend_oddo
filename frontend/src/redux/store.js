import { combineReducers } from "redux";
import user from "./slices/user";
import products from "./slices/products";
import alertdialog from "./slices/alertdialog";
import toploadingbar from "./slices/toploadingbar";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    userReducer: user,
    productsReducer: products,
    alertdialogReducer: alertdialog,
    topLoadingBarReducer: toploadingbar,
});

export const store = configureStore({
    reducer: reducer,
});