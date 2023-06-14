import React from "react";
import { Box } from "@mui/material";

import { Footer, Navbar } from "../components";

const Layout = ({ children, ...props }) => {
    return (
        <Box sx={{ width: "100%" }}>
            <Navbar />
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;
