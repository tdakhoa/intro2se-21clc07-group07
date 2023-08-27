import { Box, CardMedia, Chip, Grid, styled } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";

import { Typography } from "../../../../components";
import { setActiveSong } from "../../../../redux/features/playerSlice";
import { useDispatch } from "react-redux";

const LatestCard = ({ type, title, img, date, data }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setActiveSong(data));
    };

    return (
        <ArticleBox>
            <GridCard sx={{ border: "none" }} direction="column" container>
                <Grid item xs={7} sx={{ width: "100%" }}>
                    <StyledCardMedia image={img} title="">
                        <Overlay>
                            <PlayCircle
                                onClick={handleClick}
                                sx={{ fontSize: "50px", position: "relative", zIndex: 2, color: "#fff" }}
                            />
                        </Overlay>
                    </StyledCardMedia>
                </Grid>
                <Grid item xs={5} sx={{ color: "#000" }}>
                    <Chip
                        sx={{
                            color: "var(--palette-01)",
                            backgroundColor: "var(--palette-04)",
                            margin: "1rem 0 0.5rem"
                        }}
                        label={type}
                        size="small"
                    />
                    <TitleTypo component="h1" size="18px" weight="bold">
                        {title}
                    </TitleTypo>
                    <Typography component="p" size="tiny" sx={{ marginTop: "0.4rem", color: "#929292" }}>
                        {date}
                    </Typography>
                </Grid>
            </GridCard>
        </ArticleBox>
    );
};

export default LatestCard;

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "6px"
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
    height: "21rem",
    backgroundColor: "var(--palette-06)",
    boxSizing: "border-box",
    userSelect: "none",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
    padding: "0.7rem",
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
