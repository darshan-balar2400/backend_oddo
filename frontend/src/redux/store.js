import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";

const reducer = {
    userReducer: user,
};

export const store = configureStore({
    reducer,
});