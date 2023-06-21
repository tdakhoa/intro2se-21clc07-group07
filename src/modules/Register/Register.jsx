import { Box, styled } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Carousel, Typography } from "../../components";
import logo from "../../../public/logo.png";

const Register = () => {
    return (
        <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
            <Logo>
                <Link href="/">
                    <Image priority src={logo} alt="logo" width={200} />
                </Link>
            </Logo>
            <Overlay />
            <Box sx={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ position: "absolute", zIndex: -999, height: "100%", width: "50%" }}>
                    <Carousel listData={dataList} />
                </Box>
                <Box sx={{ width: "65%", textAlign: "center" }}>
                    <Typography component="h6" size="h6" color="white" weight="semiBold">
                        New journey is waiting for you
                    </Typography>
                    <Typography
                        component="h1"
                        size="h1"
                        color="white"
                        weight="extraBold"
                        sx={{ fontFamily: "Fairplay", lineHeight: "4.5rem" }}>
                        Nice To Meet You
                    </Typography>
                    <Typography component="h6" size="h6" color="white" weight="semiBold" sx={{ marginTop: "1.5rem" }}>
                        Whether you're seeking inspiration, seeking answers to life's big questions, or simply looking
                        to expand your horizons, our podcast is your gateway to a world of fascinating discoveries.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ width: "50%", backgroundColor: "#212121" }}></Box>
        </Box>
    );
};

export default Register;

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

const Overlay = styled(Box)(({ theme }) => ({
    background: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "inherit",
    textAlign: "center",
    zIndex: "-998"
}));

const Logo = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "5%",
    left: "2%"
}));
