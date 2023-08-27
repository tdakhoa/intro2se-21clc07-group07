import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { Footer, Navbar } from "../components";
import MainPlayer from "./MainPlayer/MainPlayer";
import { useSelector } from "react-redux";

const Layout = ({ children, ...props }) => {
    const { currentSong } = useSelector((state) => state.player);

    return (
        <Box sx={{ width: "100%" }}>
            <Navbar />
            {children}
            <Footer />
            {currentSong && <MainPlayer />}
        </Box>
    );
};

export default Layout;
