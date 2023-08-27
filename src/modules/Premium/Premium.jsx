import React from "react";
import Image from "next/image";
import { styled, Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";

import Layout from "../Layout";
import pre1 from "../../../public/pre-1.png";
import pre2 from "../../../public/pre-2.png";
import pre3 from "../../../public/pre-3.png";
import pre4 from "../../../public/pre-4.png";
import { Button, Carousel, Typography } from "../../components";
import { Lens } from "@mui/icons-material";
import Link from "next/link";

const Premium = () => {
    return (
        <Layout>
            <Root>
                <Overlay>
                    <Box className="hero-introduction">
                        <Typography
                            component="h1"
                            size="86px"
                            color="white"
                            weight="extraBold"
                            sx={{ fontFamily: "Playfair Display", lineHeight: "1.1" }}>
                            Membership Plan
                        </Typography>

                        <Typography
                            component="h6"
                            size="18px"
                            color="white"
                            weight="regular"
                            sx={{ width: { xs: "80%", md: "100%" }, marginTop: "1.5rem" }}>
                            <Highlighter>14 days</Highlighter> unlimited free trial.{" "}
                            <Highlighter>No contract or credit card </Highlighter>
                            required.
                        </Typography>
                    </Box>
                </Overlay>
                <Box sx={{ position: "absolute", zIndex: -999, height: "inherit", width: "100%" }}>
                    <Carousel listData={dataList} />
                </Box>
            </Root>
            <Box sx={{ backgroundColor: "#212121", color: "#fff", paddingBottom: "5rem" }}>
                <CenterBox>
                    <Typography
                        size="h5"
                        weight="semiBold"
                        align="center"
                        color="var(--palette-01)"
                        sx={{ textTransform: "uppercase" }}>
                        Why should you choose
                    </Typography>
                    <Typography
                        size="h2"
                        weight="bold"
                        align="center"
                        color="#000"
                        sx={{ fontFamily: "Playfair Display" }}>
                        Premium Membership?
                    </Typography>
                    <Box sx={{ display: "flex", gap: "6rem", marginTop: "2rem" }}>
                        <IconBox>
                            <Image width={180} src={pre4} />
                            <Typography color="#fff" weight="bold" size="28px" sx={{ fontFamily: "Playfair Display" }}>
                                Download Podcasts
                            </Typography>
                        </IconBox>
                        <IconBox>
                            <Image width={180} src={pre3} />
                            <Typography color="#fff" weight="bold" size="28px" sx={{ fontFamily: "Playfair Display" }}>
                                No ads
                            </Typography>
                        </IconBox>
                        <IconBox>
                            <Image width={180} src={pre2} />
                            <Typography color="#fff" weight="bold" size="28px" sx={{ fontFamily: "Playfair Display" }}>
                                Quality Podcasts
                            </Typography>
                        </IconBox>
                        <IconBox>
                            <Image width={180} src={pre1} />
                            <Typography color="#fff" weight="bold" size="28px" sx={{ fontFamily: "Playfair Display" }}>
                                Lossless
                            </Typography>
                        </IconBox>
                    </Box>
                </CenterBox>

                <Box sx={{ marginTop: "4rem" }}>
                    <Typography
                        size="h2"
                        weight="bold"
                        align="center"
                        color="white"
                        sx={{ fontFamily: "Playfair Display" }}>
                        Choose Your Plan
                    </Typography>

                    <Box sx={{ margin: "5%", display: "flex", gap: "4rem", justifyContent: "center" }}>
                        {plans.map((plan, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: "22rem",
                                    height: "35rem",
                                    backgroundColor: index % 2 == 1 ? "var(--palette-01)" : "rgba(249, 224, 187, 0.80)",
                                    padding: "2rem",
                                    transform: index % 2 == 1 ? "translateY(-30px)" : "",
                                    color: index % 2 == 1 ? "#fff" : "#000"
                                }}>
                                {index % 2 == 1 ? (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "-1rem",
                                            left: 0,
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center"
                                        }}>
                                        <Typography
                                            color="#000"
                                            weight="semiBold"
                                            sx={{
                                                backgroundColor: "var(--palette-04)",
                                                color: "var(--palette-01)",
                                                padding: "0.3rem 1rem"
                                            }}>
                                            Highly Recommend
                                        </Typography>
                                    </Box>
                                ) : (
                                    <></>
                                )}
                                <Typography weight="semiBold" size="h5" sx={{ fontFamily: "Playfair Display" }}>
                                    {plan.title}
                                </Typography>
                                <Typography weight="regular">Membership</Typography>
                                <Box>
                                    <Typography
                                        weight="semiBold"
                                        size="h2"
                                        sx={{ display: "inline-block", fontFamily: "Playfair Display" }}>
                                        ${plan.price}
                                    </Typography>
                                    <Typography weight="regular" sx={{ display: "inline-block", marginLeft: "0.5rem" }}>
                                        /month
                                    </Typography>
                                </Box>
                                <Typography weight="regular">Save ${plan.save}</Typography>
                                <Box sx={{ width: "100%", borderBottom: "1px solid #fff", marginTop: "1.5rem" }} />
                                <List>
                                    {perks.map((item, i) => (
                                        <ListItem key={i}>
                                            <ListItemIcon>
                                                <Lens
                                                    sx={{ color: index % 2 == 1 ? "#fff" : "#000", fontSize: "10px" }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText>{item}</ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
                                    <Link href={`/checkout/${plan.title.toLowerCase()}`}>
                                        <Button
                                            sx={{
                                                padding: "0.5rem 3rem",
                                                backgroundColor:
                                                    index % 2 == 1 ? "var(--palette-02)" : "var(--palette-01)",
                                                borderColor: index % 2 == 1 ? "var(--palette-02)" : "var(--palette-01)",
                                                "&:hover": {
                                                    backgroundColor:
                                                        index % 2 == 1
                                                            ? "var(--palette-02-hover)"
                                                            : "var(--palette-01-hover)",
                                                    borderColor:
                                                        index % 2 == 1
                                                            ? "var(--palette-02-hover)"
                                                            : "var(--palette-01-hover)",
                                                    color: "#fff"
                                                }
                                            }}>
                                            Choose Plan
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default Premium;

const Root = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "80vh"
}));

const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem"
}));

const Overlay = styled(Box)(({ theme }) => ({
    background: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "inherit",
    textAlign: "right",
    "& .hero-introduction": {
        position: "absolute",
        bottom: "25%",
        right: "5%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "right",
        justifyContent: "center"
    },
    [theme.breakpoints.down("sm")]: {
        "& .hero-introduction": {
            justifyContent: "start",
            alignItems: "center",
            textAlign: "right",
            width: "100%",
            inset: 0,
            marginTop: "25%",
            padding: "0 1rem",
            gap: "0.5rem"
        }
    }
}));

const CenterBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "3% 0%",
    background: "linear-gradient(180deg, #F9E0BB 0%, rgba(254, 254, 254, 0.00) 85.94%)",
    [theme.breakpoints.down("md")]: {
        padding: "1.5rem 0rem",
        marginBottom: "3rem"
    }
}));

// ------------------------------------CAROUSEL------------------------------------

const imgLinks = [
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
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

const Highlighter = styled("span")(({ theme }) => ({
    color: "var(--palette-03)",
    fontWeight: 700
}));

const dataList = imgLinks.map((link, i) => (
    <CarouselItem key={i}>
        <img style={{ transform: "scaleX(-1)" }} alt="" src={link} />
    </CarouselItem>
));

const perks = ["Unlimited access", "High throughput", "Quick support", "Preview podcast", "No ads"];
const plans = [
    { title: "One-month", price: "7.00", save: "30" },
    { title: "Six-month", price: "5.50", save: "40" },
    { title: "One-year", price: "4.00", save: "50" }
];
