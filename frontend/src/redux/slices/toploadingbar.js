import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    progress: 0,
};

const topLoadingBarSlice = createSlice({
    name: 'topLoadingBar',
    initialState: initialState,
    reducers: {
        setProgress(state, actions) {
            state.progress = actions.payload;
        }
    },
});

export const { setProgress } = topLoadingBarSlice.actions;
export default topLoadingBarSlice.reducer;