import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: "" };

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        snackbarData: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { snackbarData } = snackbarSlice.actions;

export default snackbarSlice.reducer;
