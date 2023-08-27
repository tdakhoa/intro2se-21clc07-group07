import React from "react";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";

import Layout from "../../Layout";
import { Button, Typography } from "../../../components";

const Failed = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    return (
        <Layout>
            <Root>
                <Typography size="h2" color="#fff" sx={{ fontFamily: "Playfair Display" }}>
                    There are some errors while purchasing
                </Typography>
                <Typography size="h4" color="#fff" sx={{ fontFamily: "Playfair Display" }}>
                    Please re-do your purchase or get contact with us
                </Typography>
                <StyledButton onClick={handleClick}>Back To Home Page</StyledButton>
            </Root>
        </Layout>
    );
};

export default Failed;

const StyledButton = styled(Button)(({ theme }) => ({
    padding: "1rem 1.5rem",
    marginTop: "1.5rem",
    width: "50%",
    backgroundColor: "var(--palette-01)",
    "&:hover": {
        backgroundColor: "#995542",
        borderColor: "#995542",
        color: "#fff"
    }
}));

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: "8% 10%",
    backgroundColor: "#212121",
    gap: "5%",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column"
}));
