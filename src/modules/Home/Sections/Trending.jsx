import { Box } from "@mui/material";
import React from "react";
import { ChevronRight } from "@mui/icons-material";

import { Button, Typography } from "../../../components";
import TrendingCard from "./components/TrendingCard";

const Trending = () => {
    return (
        <>
            <Box sx={{ height: "110vh", backgroundColor: "#212121", color: "#fff", padding: "5%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                    <Box>
                        <Typography
                            component="h1"
                            size="h6"
                            transform="uppercase"
                            weight="medium"
                            sx={{ letterSpacing: "3.6px" }}>
                            Visit our
                        </Typography>
                        <Typography component="h1" size="h2" weight="semiBold" sx={{ fontFamily: "Playfair Display" }}>
                            Trending Playlists
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

                <Box sx={{ display: "flex", gap: "6rem" }}>
                    <TrendingCard desc={data.desc} img={data.img} title={data.title} />
                    <TrendingCard desc={data.desc} img={data.img} title={data.title} />
                </Box>
            </Box>
        </>
    );
};

export default Trending;

const data = {
    desc: "Lifestyle is the interests, opinions, and behavioural orientation of an individual, group, or culture. The term was introduced by Austrian psychologist Alfred Adler.",
    title: "Mastering the Art of Communication: Tips for Effective Conversations",
    img: "https://images.unsplash.com/photo-1650513737281-882e597ee5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
};
