import React, { useState } from "react";
import { InputBase, styled, Box, Grid, Pagination, Tabs, useTheme, useMediaQuery } from "@mui/material";
import { ArrowDownwardOutlined, Search } from "@mui/icons-material";

import Layout from "../Layout";
import { Button, QuestionAccordion, Typography } from "../../components";

const FAQ = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    return (
        <Layout>
            <Box sx={{ backgroundColor: "#212121", color: "#fff", padding: { xs: "3rem 1rem", md: "8% 0%" } }}>
                <Typography
                    component="h1"
                    size="86px"
                    color="white"
                    weight="extraBold"
                    align="center"
                    sx={{ fontFamily: "Playfair Display", lineHeight: "1.1" }}>
                    FAQ
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2.5rem"
                    }}>
                    <SearchBox>
                        <StyledInputBase placeholder="Find out if we have any answered question you need" />
                        <Search />
                    </SearchBox>
                </Box>
                <CenterBox>
                    <Typography
                        size="h3"
                        weight="bold"
                        align="center"
                        color="#000"
                        sx={{ fontFamily: "Playfair Display", whiteSpace: "pre-line" }}>
                        We{"'"}re here to answer!{"\n"}If you don{"'"}t see your question, drop us a line!
                    </Typography>
                    <Button
                        bgcolor="primary"
                        sx={{ marginTop: { xs: "0.5rem", md: "1.4rem" }, display: "flex", padding: "1rem 1.5rem" }}
                        endIcon={<ArrowDownwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                        <Typography size="p" weight="semiBold">
                            Ask new question
                        </Typography>
                    </Button>
                </CenterBox>
            </Box>
        </Layout>
    );
};

export default FAQ;
