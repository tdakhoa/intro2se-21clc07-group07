import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import themeReducer from "./features/themeSlice";
import userReducer from "./features/userSlice";
import snackbarReducer from "./features/snackbarSlice";
import SongReducer from "./features/songSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        player: playerReducer,
        user: userReducer,
        snackbar: snackbarReducer,
        song: SongReducer
    }
});
