import { Box, CardMedia, Grid, styled } from "@mui/material";
import { ChevronRight, PlayCircleFilled } from "@mui/icons-material";

import { Typography } from "../../../../components";

const TrendingCard = ({ desc, title, img }) => {
    return (
        <ArticleBox>
            <GridCard sx={{ border: "none" }} direction="column" container>
                <Grid item xs={5} sx={{ width: "100%" }}>
                    <StyledCardMedia image={img} title="">
                        <Overlay></Overlay>
                    </StyledCardMedia>
                </Grid>
                <Grid item xs={7} sx={{ color: "#000", padding: "2% 3%" }}>
                    <Typography component="p" size="14px" sx={{ marginTop: "0.4rem", color: "#929292" }}>
                        {desc}
                    </Typography>
                    <Box sx={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {[1, 2, 3].map(() => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <PlayCircleFilled
                                    sx={{
                                        color: "#F0F0F0",
                                        borderRadius: 999,
                                        borderColor: "#F0F0F0",
                                        zIndex: 1,
                                        position: "relative",
                                        backgroundColor: "transparent",
                                        fontSize: "42px"
                                    }}
                                />
                                <Box
                                    sx={{
                                        backgroundColor: "var(--palette-01)",
                                        width: "15px",
                                        height: "15px",
                                        position: "relative",
                                        left: "-27px",
                                        top: "2px",
                                        zIndex: 0
                                    }}
                                />
                                <TitleTypo weight="bold">{title}</TitleTypo>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ width: "100%", borderBottom: "2px solid #929292", margin: "1rem 0 1.5rem" }} />
                    <Box
                        sx={{
                            width: "15%",
                            borderColor: "#fff",
                            display: "flex",
                            alignItems: "center",
                            color: "#929292",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                fontStyle: "italic"
                            }
                        }}>
                        <Typography weight="bold" transform="uppercase">
                            See All
                        </Typography>
                        <ChevronRight sx={{ fontSize: "20px", marginLeft: "4px" }} />
                    </Box>
                </Grid>
            </GridCard>
        </ArticleBox>
    );
};

export default TrendingCard;

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "8px 8px 0 0"
}));

const ArticleBox = styled("div")(({ theme }) => ({
    marginTop: "3rem",
    width: "100%",
    color: "var(--palette-02)",
    [theme.breakpoints.down("sm")]: {
        width: "50%"
    },
    [theme.breakpoints.down("md")]: {
        width: "80%"
    }
}));

const GridCard = styled(Grid)(({ theme }) => ({
    height: "35rem",
    backgroundColor: "var(--palette-06)",
    boxSizing: "border-box",
    userSelect: "none",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.5)",
        cursor: "pointer",
        "& .MuiBox-root": {
            visibility: "visible"
        }
    },
    [theme.breakpoints.between("sm", "md")]: {
        height: "28rem",
        width: "20rem"
    }
}));

const TitleTypo = styled(Typography)(({ theme }) => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    maxWidth: "100%"
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    background: "rgba(0, 0, 0, 0.3)",
    transition: "all 0.2s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    visibility: "hidden",
    zIndex: 1,
    width: "100%",
    height: "100%",
    borderRadius: "6px"
}));
