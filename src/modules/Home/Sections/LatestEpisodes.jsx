import { Box, Grid } from "@mui/material";
import React from "react";
import { Typography } from "../../../components";
import LatestCard from "./components/LatestCard";

const LatestEpisodes = () => {
    return (
        <>
            <Box sx={{ height: "110vh", backgroundColor: "#212121", color: "#fff", padding: "5%" }}>
                <Box>
                    <Typography component="h1" size="h5" transform="uppercase" weight="medium">
                        Explore our
                    </Typography>
                    <Typography component="h1" size="h2" weight="semiBold" sx={{ fontFamily: "Playfair" }}>
                        Latest Episodes
                    </Typography>
                </Box>

                <div>
                    <Grid container spacing={8  }>
                        {cardData.map((item, i) => (
                            <Grid item xs={3} key={i}>
                                <LatestCard type={item.type} title={item.title} img={item.img} date={item.date} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
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
        title: "Mastering the Art of Communication: Tips for Effective Conversations",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        type: "Life Style",
        title: "Mastering the Art of Communication: Tips for Effective Conversations",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        type: "Life Style",
        title: "Mastering the Art of Communication: Tips for Effective Conversations",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
];
