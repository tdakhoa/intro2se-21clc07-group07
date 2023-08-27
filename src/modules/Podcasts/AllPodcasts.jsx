import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Typography } from "../../components";
import LatestCard from "../Home/Sections/components/LatestCard";
import Layout from "../Layout";
import { getStorage, ref, listAll } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { themePreferences } from "../../redux/features/themeSlice";
import { useRouter } from "next/router";

const AllPodcasts = () => {
    const [data, setData] = useState([]);
    const router = useRouter();

    const getData = () => {
        const storage = getStorage();
        const listRef = ref(storage, "");
        let mergeData = [];
        listAll(listRef).then((res) => {
            res.items.forEach((itemRef, i) => {
                let min = Math.ceil(0);
                let max = Math.floor(cardData.length - 1);
                let randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
                mergeData.push({
                    ...cardData[randomIndex],
                    title: itemRef.name.slice(0, itemRef.name.length - 4),
                    data: {
                        currentSong: itemRef.name,
                        title: itemRef.name.slice(0, itemRef.name.length - 4),
                        artist: cardData[randomIndex].data.artist
                    }
                });
            });

            setData(mergeData);
        });
    };

    useEffect(() => {
        getData();
    }, [router.asPath]);

    return (
        <Layout>
            <Box sx={{ minHeight: "100vh", backgroundColor: "#212121", color: "#fff", padding: "8%" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end" }}>
                    <Box>
                        <Typography component="h1" size="h1" weight="semiBold" sx={{ fontFamily: "Playfair Display" }}>
                            All Podcasts
                        </Typography>
                    </Box>
                </Box>

                <Grid container spacing={6}>
                    {data.map((item, i) => (
                        <Grid item xs={3} key={i}>
                            <LatestCard
                                type={item.type}
                                title={item.title}
                                img={item.img}
                                date={item.date}
                                data={item.data}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
};

export default AllPodcasts;

const cardData = [
    {
        type: "Life Style",
        title: "Mastering the Art of Communication: Tips for Effective Conversations",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        data: {
            currentSong: "Danger Of Silence.mp3",
            title: "Mastering the Art of Communication",
            artist: "Deren Krisbee"
        }
    },
    {
        type: "Life Style",
        title: "The Science of Happiness: Exploring the Key Ingredients",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
        data: {
            currentSong: "Try Something New.mp3",
            title: "The Science of Happiness",
            artist: "Hannah Lee"
        }
    },
    {
        type: "Life Style",
        title: "Building Resilience: Bouncing Back from Adversity",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        data: {
            currentSong: "How To Sound Smart.mp3",
            title: "Building Resilience",
            artist: "Minnie Sprint"
        }
    },
    {
        type: "Life Style",
        title: "Creating a Positive Mindset: Shifting Perspectives for Success",
        date: "21th June, 2023",
        img: "https://images.unsplash.com/photo-1610244767159-0f9797ff1926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        data: {
            currentSong: "Benefit Of Bilingual Brain.mp3",
            title: "Creating a Positive Mindset",
            artist: "Layla Vienna"
        }
    }
];
