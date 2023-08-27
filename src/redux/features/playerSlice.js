import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSong: "",
    title: "",
    artist: ""
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.currentSong = action.payload.currentSong;
            state.title = action.payload.title;
            state.artist = action.payload.artist;
        }
    }
});

export const { setActiveSong } = playerSlice.actions;

export default playerSlice.reducer;
