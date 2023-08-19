import { Box, Grid } from "@mui/material";
import React from "react";
import { ChevronRight } from "@mui/icons-material";

import { Button, Typography } from "../../../components";
import LatestCard from "./components/LatestCard";

const LatestEpisodes = () => {
    return (
        <>
            <Box sx={{ height: "90vh", backgroundColor: "#212121", color: "#fff", padding: "5%" }}>
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
                            Latest Episodes
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

                <Grid container spacing={6}>
                    {cardData.map((item, i) => (
                        <Grid item xs={3} key={i}>
                            <LatestCard type={item.type} title={item.title} img={item.img} date={item.date} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default LatestEpisodes;

const cardData = [
    {
        type: "Life Style",
        title: "Mastering the Art of Communication: Tips for Effective Conversations",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        type: "Life Style",
        title: "The Science of Happiness: Exploring the Key Ingredients",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
    },
    {
        type: "Life Style",
        title: "Building Resilience: Bouncing Back from Adversity",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        type: "Life Style",
        title: "Creating a Positive Mindset: Shifting Perspectives for Success",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1610244767159-0f9797ff1926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
];
