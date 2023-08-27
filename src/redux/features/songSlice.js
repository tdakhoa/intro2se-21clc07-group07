import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSong: "",
    title: "",
    artist: ""
};

const songSlice = createSlice({
    name: "song",
    initialState,
    reducers: {
        setSong: (state, action) => {
            state.currentSong = action.payload.currentSong;
            state.title = action.payload.title;
            state.artist = action.payload.artist;
        }
    }
});

export const { setSong } = songSlice.actions;

export default songSlice.reducer;
