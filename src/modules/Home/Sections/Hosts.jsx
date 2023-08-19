import { Box } from "@mui/material";
import React from "react";
import { ChevronRight } from "@mui/icons-material";

import { Button, Typography } from "../../../components";
import DragDrop from "./components/DragDrop";

const Host = () => {
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
            </Box>
        </>
    );
};

export default Host;
