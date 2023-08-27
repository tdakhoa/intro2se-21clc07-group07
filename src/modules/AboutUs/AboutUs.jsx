import React from "react";

import Layout from "../Layout";
import Information from "./Sections/Information";
import Contact from "./Sections/Contact";
import Specialists from "./Sections/Specialists";
import { Box } from "@mui/material";

const AboutUs = () => {
    return (
        <Layout>
            <Box sx={{ backgroundColor: "#212121" }}>
                <Information />
                <Contact />
                <Specialists />
            </Box>
        </Layout>
    );
};

export default AboutUs;
