import React, { useState, useRef, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Typography from "../../components/Typography/Typography";

const MainPlayer = () => {
    const audioRef = useRef();
    const { currentSong, title, artist } = useSelector((state) => state.player);
    const [audioUrl, setAudioUrl] = useState("");
    const storage = getStorage();

    useEffect(() => {
        getDownloadURL(ref(storage, currentSong)).then((url) => {
            setAudioUrl(url);
            updateSong();
        });
    }, [currentSong]);

    const updateSong = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    };

    console.log(audioUrl);

    return (
        <Box
            sx={{
                position: "fixed",
                padding: "1rem 0",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "slideup 0.3s ease-in-out",
                backgroundColor: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), #2a2a80, #5A5092)",
                backdropFilter: "blur(16px)",
                borderRadius: "30px 30px 0 0",
                gap: 0,
                zIndex: 10
            }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", width: "40%" }}>
                <Box sx={{ width: "50%" }}>
                    <Typography size="body1" weight="bold" color="white">
                        {title ? title : "No active Song"}
                    </Typography>
                    <Typography size="body2" color="#d6ffe1">
                        {artist ? artist : "No active Song"}
                    </Typography>
                </Box>
            </Box>

            {audioUrl ? (
                <audio ref={audioRef} controls>
                    <source src={audioUrl} type="audio/mpeg" />
                </audio>
            ) : (
                <></>
            )}
        </Box>
    );
};

export default MainPlayer;
