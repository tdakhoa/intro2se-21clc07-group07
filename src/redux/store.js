import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
    reducer: { theme: themeReducer, player: playerReducer }
});
