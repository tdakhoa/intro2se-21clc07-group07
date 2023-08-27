import React from "react";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";

import Layout from "../Layout";
import { Button, Typography } from "../../components";
import DragDrop from "./components/DragDrop";

const Upload = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    return (
        <Layout>
            <Root>
                <Typography size="h1" color="#fff" sx={{ fontFamily: "Playfair Display" }}>
                    Upload Podcast
                </Typography>
                <DragDrop />
                <StyledButton onClick={handleClick}>Back To Home Page</StyledButton>
            </Root>
        </Layout>
    );
};

export default Upload;

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
