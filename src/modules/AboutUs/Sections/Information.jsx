import React from "react";
import { Box, CardMedia, styled } from "@mui/material";
import { ArrowDownwardOutlined } from "@mui/icons-material";

import { Button, Typography } from "../../../components";

const Information = () => {
    const handleClick = () => {
        const element = document.getElementById("specialists");
        element?.scrollIntoView();
    };

    return (
        <Root>
            <TextContainer>
                <Typography size="h1" color="secondary" transform="uppercase" sx={{ fontFamily: "Playfair Display" }}>
                    Our Story
                </Typography>
                <Typography color="#fff" sx={{ textAlign: "justify" }}>
                    Physical space is often conceived in three linear dimensions, although modern physicists usually
                    consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The
                    concept of space is considered to be of fundamental importance to an understanding of the physical
                    universe. However, disagreement continues between philosophers over whether it is itself an entity,
                    a relationship between entities, or part of a conceptual framework.
                </Typography>
                <Button
                    onClick={handleClick}
                    bgcolor="primary"
                    sx={{ marginTop: { xs: 0, md: "1.4rem" } }}
                    endIcon={<ArrowDownwardOutlined sx={{ fontSize: "1.2rem", paddingLeft: "0.2rem" }} />}>
                    <Typography size="p" color="inherit" weight="medium">
                        Contributors
                    </Typography>
                </Button>
            </TextContainer>
            <CardMedia
                sx={{
                    width: { xs: "90%", md: "40%" },
                    minHeight: { xs: 320, md: 400 },
                    borderRadius: "0px 100px",
                    boxShadow: "0px 0px 50px rgba(23, 96, 118, 0.3)"
                }}
                component="img"
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
        </Root>
    );
};

export default Information;

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    padding: "10%",
    gap: "7%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
        alignItems: "center",
        padding: "10% 5%",
        gap: "2.5rem",
        textAlign: "center"
    }
}));

const TextContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
    [theme.breakpoints.down("md")]: {
        alignItems: "center"
    }
}));
