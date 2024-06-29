import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    cellNumber: null,
    profileImage: null,
    uuid: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state = {
                ...state,
                ...action,
            };
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;