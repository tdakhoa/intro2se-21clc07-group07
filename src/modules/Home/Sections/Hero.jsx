import React from "react";
import { styled, Box } from "@mui/material";
import { ArrowDownwardOutlined, PlayArrow, PlayArrowOutlined } from "@mui/icons-material";

import { Button, Carousel, Typography } from "../../../components";

const Hero = () => {
    const handleScroll = () => {
        const element = document.getElementById("news");
        element?.scrollIntoView();
    };

    return (
        <Root>
            <Overlay>
                <Box className="hero-introduction">
                    <Typography
                        component="h1"
                        size="86px"
                        color="white"
                        weight="extraBold"
                        sx={{ fontFamily: "Playfair Display", lineHeight: "1.1" }}>
                        Listen, learn,
                    </Typography>
                    <Typography
                        component="h1"
                        size="86px"
                        color="white"
                        weight="extraBold"
                        sx={{ fontFamily: "Playfair Display", lineHeight: "1.1" }}>
                        and be inspired!
                    </Typography>
                    <Typography
                        component="h6"
                        size="h6"
                        color="white"
                        weight="regular"
                        sx={{ width: { xs: "80%", md: "100%" }, marginTop: "2rem" }}>
                        Podaholic - Where listening becomes an enriching experience. Explore our collection of
                        thought-provoking podcasts that will challenge your thinking, spark meaningful discussions, and
                        leave you inspired.
                    </Typography>
                    <Button
                        bgcolor="transparent"
                        txcolor="white"
                        sx={{
                            marginTop: { xs: "0.4rem", md: "2rem" },
                            padding: { xs: "0.5rem", md: "0.5rem 1rem" },
                            "&:hover": { borderColor: "#fff", backgroundColor: "#fff", color: "black" }
                        }}
                        onClick={handleScroll}
                        endIcon={<PlayArrow sx={{ fontSize: "1.2rem" }} />}>
                        <Typography
                            size="p"
                            color="inherit"
                            weight="medium"
                            sx={{ display: { xs: "none", sm: "block" }, paddingRight: "0.2rem" }}>
                            Enjoy our latest podcasts
                        </Typography>
                    </Button>
                </Box>
            </Overlay>
            <Box sx={{ position: "absolute", zIndex: -999, height: "inherit", width: "100%" }}>
                <Carousel listData={dataList} />
            </Box>
        </Root>
    );
};

export default Hero;

// ------------------------------------OVERLAY------------------------------------

const Root = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100vh"
}));

const Overlay = styled(Box)(({ theme }) => ({
    background: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "inherit",
    textAlign: "center",
    "& .hero-introduction": {
        position: "absolute",
        top: "25%",
        right: "25%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    [theme.breakpoints.down("sm")]: {
        "& .hero-introduction": {
            justifyContent: "start",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            inset: 0,
            marginTop: "25%",
            padding: "0 1rem",
            gap: "0.5rem"
        }
    }
}));

// ------------------------------------CAROUSEL------------------------------------

const imgLinks = [
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1567596296091-0a257a028e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1567596275753-92607c3ce1ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1567596388756-f6d710c8fc07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
];

const CarouselItem = styled(Box)(({ theme }) => ({
    height: "100%",
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "red",
    "& img": {
        objectFit: "cover !important"
    }
}));

const dataList = imgLinks.map((link, i) => (
    <CarouselItem key={i}>
        <img alt="" src={link} />
    </CarouselItem>
));
