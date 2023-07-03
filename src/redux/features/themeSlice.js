import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = "theme";

const initialState = {};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        themePreferences: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { themePreferences } = themeSlice.actions;

export default themeSlice.reducer;
