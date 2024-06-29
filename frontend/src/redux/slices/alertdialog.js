import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visibility: false,
    title: null,
    description: null,
    button: "Ok",
};

const alertDialogSlice = createSlice({
    name: 'alertdialog',
    initialState: initialState,
    reducers: {
        show(state, action) {
            return action.payload;
        },
        hide(state) {
            state.visibility = false;
        },
    },
});

export const { show, hide } = alertDialogSlice.actions;
export default alertDialogSlice.reducer;