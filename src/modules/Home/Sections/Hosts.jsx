import { Box, CardMedia, styled } from "@mui/material";
import React from "react";
import { ChevronRight } from "@mui/icons-material";

import { Button, Typography } from "../../../components";

const Host = () => {
    return (
        <>
            <Box sx={{ height: "95vh", backgroundColor: "#212121", color: "#fff", padding: "5%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                    <Box>
                        <Typography
                            component="h1"
                            size="h6"
                            transform="uppercase"
                            weight="medium"
                            sx={{ letterSpacing: "3.6px" }}>
                            Explore our
                        </Typography>
                        <Typography component="h1" size="h2" weight="semiBold" sx={{ fontFamily: "Playfair Display" }}>
                            Popular Hosts
                        </Typography>
                    </Box>
                    <Button
                        bgcolor="transparent"
                        endIcon={<ChevronRight sx={{ fontSize: "20px", marginLeft: "4px" }} />}
                        sx={{
                            textTransform: "uppercase",
                            borderColor: "#fff",
                            padding: "0.75rem 1rem 0.75rem 1.5rem",
                            fontSize: "16px",
                            "&:hover": {
                                borderColor: "#fff",
                                backgroundColor: "#fff",
                                color: "#000"
                            }
                        }}>
                        See All
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        gap: "2rem",
                        marginTop: "2rem",
                        justifyContent: "center",
                        textAlign: "center"
                    }}>
                    {cardData.map((item, i) => (
                        <Box key={i}>
                            <Box sx={{ border: "2px solid #fff", borderRadius: 999, marginBottom: "1.5rem" }}>
                                <StyledCardMedia image={item.img} title="" />
                            </Box>
                            <Typography weight="medium" size="28px" sx={{ fontFamily: "Playfair Display" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Host;

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    width: "12rem",
    height: "12rem",
    margin: "1.5rem",
    borderRadius: 999
}));

const cardData = [
    {
        title: "Lesly Juarez",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        title: "Michael Dam",
        img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        title: "Megan Michelle",
        img: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        title: "Olawale Munna",
        img: "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
    },
    {
        title: "Roxanne Zadis",
        img: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    }
];
