import React from "react";
import Layout from "../Layout";
import pic from "../../../public/aboutus.png"
import { Box, Avatar, Link,TextField } from "@mui/material";
const AboutUs = () => {
    return (
        <Layout>
            <Box
            component="img"
            sx={{height:233,width:350,}}
            src={{pic}}
            >

            </Box>

        </Layout>
    );
};

export default AboutUs;
