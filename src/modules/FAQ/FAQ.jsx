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
                <Root>
                    <Typography
                        transform="uppercase"
                        size="h3"
                        weight="extraBold"
                        color="white"
                        align="center"
                        sx={{ fontFamily: "Playfair Display" }}>
                        latest questions
                    </Typography>

                    <Grid
                        container
                        sx={{
                            justifyContent: "space-between",
                            flexGrow: 1,
                            flexDirection: { xs: "column", md: " row" },
                            marginBottom: { xs: "2rem", md: 0 }
                        }}>
                        {questionsData.map((item, i) => (
                            <QuestionGrid item xs={12} md={3.6} key={i}>
                                <Typography component="h2" size="h5" weight="bold">
                                    {item.title}
                                </Typography>
                                <Typography
                                    size="p"
                                    weight="regular"
                                    align="justify"
                                    sx={{ padding: "1rem", paddingLeft: 0 }}>
                                    {item.description}
                                </Typography>
                            </QuestionGrid>
                        ))}
                    </Grid>

                    <Typography
                        transform="uppercase"
                        size="h3"
                        weight="extraBold"
                        color="white"
                        align="center"
                        sx={{ fontFamily: "Playfair Display" }}>
                        other questions
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                        <AccordionBox>
                            <QuestionAccordion data={faq} />
                        </AccordionBox>
                        <PaginationBox>
                            <Pagination
                                sx={{
                                    ".MuiPaginationItem-root": {
                                        color: "grey"
                                    },
                                    "& .Mui-selected": {
                                        background: "var(--palette-04)",
                                        color: "var(--palette-01)",
                                        "&:hover": {
                                            background: "var(--palette-03)",
                                            color: "var(--palette-01)"
                                        }
                                    }
                                }}
                                page={page}
                                onChange={handlePageChange}
                                count={10}
                                siblingCount={0}
                                boundaryCount={matches ? 1 : 2}
                                size={matches ? "medium" : "large"}
                            />
                        </PaginationBox>
                    </Box>
                </Root>
            </Box>
        </Layout>
    );
};

export default FAQ;


export const questionsData = [
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    }
];

export const faqFormData = {
    title: "ĐẶT CÂU HỎI TẠI ĐÂY",
    description: "HÃY ĐỂ LẠI CÂU HỎI CỦA BẠN ĐỂ CHÚNG TÔI GIẢI ĐÁP",
    img: "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
};

export const faq = [
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    },
    {
        title: "What are the signs of a toxic relationship?",
        description:
            "User has 5 faces saved for PorchCam's facial recognition, but the system isn't letting him save more than those 5. He's tried removing existing ones and adding different ones, etc"
    }
];
